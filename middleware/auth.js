import { Student } from "../model/student.js";
import { Authority } from "../model/authority.js";

import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const userVerification = (scope) => {
  return (req, res) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.json({ status: false });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        if (scope == "student") {
          let { payload } = data;
          if (payload.role != "Student") {
            return res.json({ status: false });
          }
          const student = await Student.findById(payload._id);
          console.log(student);
          if (student)
            return res.json({
              status: true,
              name: student.name,
              role: "Student",
              studentID: student.studentID,
              email: student.email,
              profilePic: student?.image,
              mobile: student.mobile,
              motherName: student.motherName,
              fatherName: student.fatherName,
              address : student.address
            });
          else return res.json({ status: false });
        } else if (scope == "authority") {
          let { payload } = data;
          if (payload.role != "Admin") {
            return res.json({ status: false });
          }
          const authority = await Authority.findById(payload._id);
          console.log(authority);

          if (authority)
            return res.json({
              status: true,
              name: authority.name,
              role: authority.role,
              profilePic: authority?.image,
              email: authority.email,
              mobile: authority.mobile,
            });
          else return res.json({ status: false });
        }
      }
    });
  };
};

export { userVerification };
