import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const adminSchema = mongoose.Schema(
  {
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
    role: {
      type: String,
      enum: ["Admin", "Accountant"],
    },
  },
  {
    timestamps: true,
  }
);
adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const Authority = mongoose.model("authority", adminSchema);

export { Authority };
