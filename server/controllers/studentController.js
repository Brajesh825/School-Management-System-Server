import { Class } from "../model/class.js";
import { FeeStructure } from "../model/feeStructure.js";
import { Student } from "../model/student.js";
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

  getMyPendingBills = async (req, res) => {
    let studentID = req.studentID;
    // fetch student
    let student = await Student.findById(studentID.toString());
    // Fetch Classes
    let myClass = await Class.findOne({
      className: student.class,
    });
    let classId = myClass._id;
    // Get All Fee Structures
    let feeStructures = await FeeStructure.find({ class: classId });

    let yearMapping = {};

    for (const feeStructure of feeStructures) {
      let { year, month } = feeStructure;
      if (!yearMapping[year]) {
        yearMapping[year] = [month];
      } else {
        yearMapping[year].push(month);
      }
    }
    res.status(200).json({
      yearMapping,
      class: {
        className: myClass.className,
        _id: classId,
      },
    });
  };
}

export { StudentController };
