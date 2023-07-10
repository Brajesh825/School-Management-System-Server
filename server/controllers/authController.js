import { Student } from "../model/student.js";
import { createSecretToken } from "../utils/jwt.js";
class AuthController {
  loginAsAuthority = async (req, res) => {};

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
