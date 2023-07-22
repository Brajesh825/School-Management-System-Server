import { Class } from "../model/class.js";
import { FeeStructure } from "../model/feeStructure.js";
import { Order } from "../model/order.js";
import { Student } from "../model/student.js";
import { StudentService } from "../services/studentService.js";
import { cloudinary } from "../utils/clouddinary.js";

import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const studentService = new StudentService();

class StudentController {
  constructor() { }

  uploadStudentCSV() { }

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

    let myClass = await Class.findById(data.class);
    myClass.noOfStudents = myClass.noOfStudents + 1;
    student.class = myClass.className;
    await myClass.save();

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
    let student = await Student.findById(studentID.toString()).populate(
      "class"
    );
    // Fetch Classes
    let classId = student.class;
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
        className: student.class.className,
        _id: student.class._id,
      },
    });
  };
  getMyBill = async (req, res) => {
    let { class: className, year, month } = req.body;

    const feeStructure = await FeeStructure.findOne({
      class: new ObjectId(className),
      year,
      month,
    });

    res.status(200).json({
      feeStructure,
    });
  };
  updateProfile = async (req, res) => {
    try {
      const studentID = req.studentID;
      console.log(studentID);

      const { file, email, mobile } = req.body;
      // Get the temporary file path
      const filePath = req.file.path;

      const result = await cloudinary.v2.uploader.upload(filePath, {
        resource_type: "auto",
        folder: "profiles",
      });

      const publicUrl = result.secure_url;

      let student = await Student.findById(studentID);

      student.email = email;
      student.mobile = mobile;
      student.image = publicUrl;
      await student.save();

      res
        .status(200)
        .json({ message: "Successfully changed profile pic", url: publicUrl });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Something went wrong" });
    }
  };
  changePassword = async (req, res) => {
    try {
      const studentID = req.studentID;
      const { password, newPassword, confirmPassword } = req.body;

      const authority = await Student.findById(studentID);
      const auth = await authority.matchPassword(password, authority.password);
      if (!auth) {
        return res.status(400).json({ message: "Incorrect password" });
      }
      if (newPassword != confirmPassword) {
        return res.status(400).json({
          message: "New Password and confirm new password must be same",
        });
      }
      authority.password = newPassword;
      await authority.save();

      res.status(200).json({
        message: "Password Successfully Changed",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  };

  getCompleteBill = async (req, res) => {
    let studentID = req.studentID;

    // fetching student
    let student = await Student.findById(studentID.toString()).populate("class")

    // fetching all fee structure
    let feeStructures = await FeeStructure.find({ class: student.class._id })

    const bills = []

    for (let i = 0; i < feeStructures.length; i++) {
      const fee = feeStructures[i]
      let currOrder = await Order.findOne({
        classId: student.class,
        studentID: student._id,
        month: fee.month,
        year: fee.year
      })
      // already exist
      if (currOrder) {
        let bill = {}
        bill.status = currOrder.status
        bill.year = currOrder.year
        bill.month = currOrder.month
        bill.transactionDate = currOrder.createdAt
        bill.studentID = student.studentID
        bill.class = student.class.className
        bill.tutionFee = fee.tutionFee
        bill.libraryFee = fee.libraryFee
        bill.hostelFee = fee.hostelFee
        bill.transportFee = fee.transportFee
        bills.push(bill)
      } else {
        let bill = {}
        bill.status = "Not Started"
        bill.year = fee.year
        bill.month = fee.month
        bill.transactionDate = "NA"
        bill.studentID = student.studentID
        bill.class = student.class.className
        bill.tutionFee = fee.tutionFee
        bill.libraryFee = fee.libraryFee
        bill.hostelFee = fee.hostelFee
        bill.transportFee = fee.transportFee
        bills.push(bill)
      }
    }

    res.status(200).json({
      bills,
    });



  }
}

export { StudentController };
