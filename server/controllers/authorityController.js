import { cloudinary } from "../utils/clouddinary.js";

import { Authority } from "../model/authority.js";

class AuthorityController {
  addAuthority = async (req, res) => {
    try {
      const { email, mobile, password, name, role } = req.body;

      const authority = new Authority({ name, mobile, password, email, role });
      await authority.save();

      res.status(200).json({ message: "Added AUthority Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  };
  updateProfile = async (req, res) => {
    try {
      const authorityID = req.authorityID;

      const { file, name, email, mobile } = req.body;
      // Get the temporary file path
      const filePath = req.file.path;

      const result = await cloudinary.v2.uploader.upload(filePath, {
        resource_type: "auto",
        folder: "profiles",
      });

      const publicUrl = result.secure_url;

      let authority = await Authority.findById(authorityID);
      authority.name = name;
      authority.email = email;
      authority.mobile = mobile;
      authority.image = publicUrl;
      await authority.save();

      res
        .status(200)
        .json({ message: "Successfully changed profile pic", url: publicUrl });
    } catch (error) {
      res.status(400).json({ message: "Something went wrong" });
    }
  };
  changePassword = async (req, res) => {
    try {
      const authorityID = req.authorityID;
      const { password, newPassword, confirmPassword } = req.body;

      console.log(password);
      console.log(newPassword);
      console.log(confirmPassword);

      const authority = await Authority.findById(authorityID);
      const auth = await authority.matchPassword(password, authority.password);
      if (!auth) {
        return res.status(400).json({ message: "Incorrect password" });
      }
      if (newPassword != confirmPassword) {
        return res.status(400).json({
          message: "New Password and confirm new password must be same",
        });
      }
      authority.password = newPassword;
      await authority.save();

      res.status(200).json({
        message: "Password Successfully Changed",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  };
}

export { AuthorityController };
