import mongoose from "mongoose";
const Connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection failed", error);
  }
};

export default Connectdb;
