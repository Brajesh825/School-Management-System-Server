import mongoose from "mongoose";
import { Student } from "./student.js";
import { Class } from "./class.js";

const orderSchema = mongoose.Schema(
  {
    classId: {
      type: mongoose.Types.ObjectId,
      ref: Class,
    },
    month: {
      type: String,
    },
    year: {
      type: Number,
    },
    studentID: {
      type: mongoose.Types.ObjectId,
      ref: Student,
      required : true
    },
    transactionID: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
    },
    orderNumber: {
      type: String,
      maxLength: 16,
      minLength: 16,
      unique: true,
    },
    orderName: {
      type: String,
    },
    hostelFee: {
      type: Number,
    },
    tutionFee: {
      type: Number,
    },
    transportFee: {
      type: Number,
    },
    libraryFee: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
    modeOfTransaction: {
      type: String,
      enum: ["cash", "online"],
    },
    contactDetails: {
      phone: {
        type: "String",
      },
      email: {
        type: "String",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", orderSchema);

export { Order };
