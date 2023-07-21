import { Class } from "../model/class.js";

class ClassService {
  constructor() {}

  addClass = async (data) => {
    try {
      let myClass = new Class(data);
      await myClass.save();
      return myClass;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  getAllClass = async () => {
    let myClasses = await Class.find({});
    return myClasses;
  };

  updateNumberOfStudents = async (classId, studentCount) => {};
}

export { ClassService };
