import { Student } from "../model/student.js";

import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

console.log(process.env.TOKEN_KEY);

const userVerification = (scope) => {
  return (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        if (scope == "student") {
        } else if (scope == "authority") {
        }

        const student = await Student.findById(data.id);
        if (student)
          return res.json({
            status: true,
            user: student.name,
            role: "Student",
          });
        else return res.json({ status: false });
      }
    });
  };
};

export { userVerification };
