import { Authority } from "../model/authority.js";

class AuthorityController {
  addAuthority = async (req, res) => {
    try {
      const { email, mobile, password, name, role } = req.body;

      const authority = new Authority({ name, mobile, password, email, role });
      await authority.save();

      console.log(authority);

      res.status(200).json({ message: "Added AUthority Successfully" });
    } catch (error) {
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  };
}

export { AuthorityController };
