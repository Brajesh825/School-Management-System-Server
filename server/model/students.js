import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Authority } from "./authority.js";

const studentSchema = mongoose.Schema(
  {
    addedBy: {
      type: ObjectId,
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
    mobileNUmber: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    parent: {
      name: String,
      contact: String,
      email: String,
    },
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const Student = mongoose.model("students", adminSchema);

module.exports = Student;
