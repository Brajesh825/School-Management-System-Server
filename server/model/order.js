import mongoose from "mongoose";
import { Student } from "./student.js";
import { Class } from "./class.js";

const orderSchema = mongoose.Schema(
  {
    studentID: {
      type: mongoose.Types.ObjectId,
      ref: Student,
    },
    transactionID: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
    },
    orderNumber: {
      type: Number,
    },
    orderName: {
      type: String,
    },
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
