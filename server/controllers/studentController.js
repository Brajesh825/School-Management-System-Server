import { StudentService } from "../services/studentService.js";

const studentService = new StudentService();

class StudentController {
  constructor() {}

  uploadStudentCSV() {}

  addStudent = async (req, res) => {
    let data = req.body;
    data.password = data.dob;
    var dateParts = data.dob.split("/");
    data.dob = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

    // handling ID
    let studentID =
      data.name.substr(0, 4) + dateParts[0] + dateParts[1] + dateParts[2];
    data.studentID = studentID;

    // Adding Student
    let student = await studentService.addStudent(data);
    // Updating Number Of Student
    if (!student) {
      return res.status(400).json({
        success: "false",
        message: "Student already exist",
      });
    }
    res.status(200).json({
      success: "true",
      message: "Student Successfully Added",
      student: student,
    });
  };

  getAllStudent = async (req, res) => {
    let students = await studentService.getAllStudent();
    res.status(200).json(students);
  };
}

export { StudentController };
