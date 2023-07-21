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
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin"],
    },
  },
  {
    timestamps: true,
  }
);
adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
adminSchema.pre("save", async function () {
  if ((this.isModified("password"))) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

const Authority = mongoose.model("authority", adminSchema);

export { Authority };
