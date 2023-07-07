import { FeeStructure } from "../model/feeStructure.js";

import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

class FeeStructureService {
  constructor() {}

  addFeeStructure = async (data) => {
    try {
      // check for unique in class yar month
      const isUnique = await FeeStructure.findOne({
        class: new ObjectId(data.class),
        year: data.year,
        month: data.month,
      });

      if (isUnique) {
        return [false, "This Fee Structure Already Exist"];
      }

      let fee = new FeeStructure(data);
      await fee.save();
      return [true, fee];
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  getAllFeeStructure = async () => {
    let fee = await FeeStructure.find({}).populate("class");
    console.log(fee);
    return fee;
  };
}

export { FeeStructureService };
