import { Student } from "../model/student.js";

class StudentService {
  constructor() {}

  addStudent = async (data) => {
    try {
      let student = new Student(data);
      await student.save();
      return student;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  getAllStudent = async () => {
    let student = await Student.find({});
    return student;
  };
}

export { StudentService };
