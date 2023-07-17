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
    let students = [];
    let student = await Student.find({}).populate("class");
    student.forEach((element) => {
      let curr = {};
      Object.assign(curr, element._doc);
      curr.class = element.class.className;
      students.push(curr);
    });

    return students;
  };
}

export { StudentService };
