import mongoose from "mongoose";

const classSchema = mongoose.Schema(
  {
    className: {
      type: String,
      unique: true,
    },
    noOfStudents: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("classes", classSchema);

export { Class };
