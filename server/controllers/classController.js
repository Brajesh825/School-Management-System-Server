import { ClassService } from "../services/classService.js";

const classService = new ClassService();

class ClassController {
  constructor() {}
  addClass = async (req, res) => {
    let data = req.body;
    let myClass = await classService.addClass(data);
    if (!myClass) {
      return res.status(400).json({
        success: "false",
        message: "class already exist",
      });
    }
    res.status(200).json({
      success: "true",
      message: "Class Successfully Added",
      class: myClass,
    });
  };

  getAllClass = async (req, res) => {
    let myClasses = await classService.getAllClass();
    res.status(200).json(myClasses);
  };
}

export { ClassController };
