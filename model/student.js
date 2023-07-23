import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Authority } from "./authority.js";
import { Class } from "./class.js";

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
      ref: Class,
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
    image: {
      type: String,
    },
    mobile: {
      type: String,
    },
    motherName: {
      type: String
    },
    fatherName: {
      type: String
    },
    address: {
      villageName: {
        type: String
      },
      postName: {
        type: String
      },
      policeStation: {
        type: String
      },
      pinCode: {
        type: Number
      },
      district: {
        type : String
      },
      state : {
        type : String
      }
    }

  },
  {
    timestamps: true,
  }
);
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

studentSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

const Student = mongoose.model("students", studentSchema);

export { Student };
