import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Authority } from "./authority.js";

const studentSchema = mongoose.Schema(
  {
    addedBy: {
      type: mongoose.Types.ObjectId,
      ref: Authority,
    },
    dob: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    studentID: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const Student = mongoose.model("students", studentSchema);

export { Student };
