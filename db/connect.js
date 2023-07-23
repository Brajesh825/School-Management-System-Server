import mongoose from "mongoose";

const Connect = async (mongoURI) => {
  try {
    console.log("trying for connection");
    await mongoose.connect("mongodb+srv://brajesh:ywnRP5cdZ95kippP@nodeexpressprojects.yy75c.mongodb.net/USERAPI?retryWrites=true&w=majority");
    console.log("connected");
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export { Connect };
