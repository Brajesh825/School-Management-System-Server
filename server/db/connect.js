import mongoose from "mongoose";

const Connect = async (mongoURI) => {
  try {
    console.log("trying for connection");
    await mongoose.connect("mongodb://127.0.0.1:27017/schoolmanagement");
    console.log("connected");
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export { Connect };
