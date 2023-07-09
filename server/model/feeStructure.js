import mongoose from "mongoose";

import { Class } from "./class.js";

const feeStructureSchema = mongoose.Schema(
  {
    addedBy: {
      type: mongoose.Types.ObjectId,
    },
    class: {
      type: mongoose.Types.ObjectId,
      ref: Class,
    },
    year: {
      type: Number,
    },
    month: {
      type: String,
      enum: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    libraryFee: {
      type: Number,
    },
    tutionFee: {
      type: Number,
    },
    hostelFee: {
      type: Number,
    },
    transportFee: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const FeeStructure = mongoose.model("feeStructure", feeStructureSchema);

export { FeeStructure };
