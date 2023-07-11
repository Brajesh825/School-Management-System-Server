import { Student } from "../model/student.js";

import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const Authenticate = (scope) => {
  return (req, res, next) => {
    const token = req.cookies.token;
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
          if (student) {
            req.studentID = student._id;
            next();
          } else return res.json({ status: false });
        } else if (scope == "authority") {
        }
      }
    });
  };
};

export { Authenticate };
