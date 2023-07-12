import { Student } from "../model/student.js";
import { Authority } from "../model/authority.js";

import { createSecretToken } from "../utils/jwt.js";
class AuthController {
  loginAsAuthority = async (req, res) => {
    try {
      const { password, mobile } = req.body;
      if (!mobile || !password) {
        return res.json({ message: "All fields are required" });
      }
      const authority = await Authority.findOne({ mobile });
      console.log("authority");
      console.log(authority);
      if (!authority) {
        return res.json({ message: "Incorrect password or mobile" });
      }
      const auth = await authority.matchPassword(password, authority.password);
      if (!auth) {
        return res.json({ message: "Incorrect password or mobile" });
      }
      let payload = {
        role: authority.role,
        _id: authority._id,
      };
      const token = createSecretToken(payload);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User logged in successfully", success: true });
    } catch (error) {
      console.log(error);
      return res.json({ message: "Incorrect password or mobile" });
    }
  };

  loginAsStudent = async (req, res) => {
    try {
      const { password, studentID } = req.body;
      if (!studentID || !password) {
        return res.json({ message: "All fields are required" });
      }
      const student = await Student.findOne({ studentID });

      if (!student) {
        return res.json({ message: "Incorrect password or studentID" });
      }

      const auth = await student.matchPassword(password, student.password);
      if (!auth) {
        return res.json({ message: "Incorrect password or studentID" });
      }

      let payload = {
        role: "Student",
        _id: student._id,
      };

      const token = createSecretToken(payload);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User logged in successfully", success: true });
    } catch (error) {
      console.log(error);
      return res.json({ message: "Incorrect password or studentID" });
    }
  };
}

export { AuthController };
