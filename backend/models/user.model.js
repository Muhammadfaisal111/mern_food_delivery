import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: { type: string, required: true },
    email: { type: string, required: true, unique: true },
    password: { type: string },
    mobile: { type: string, required: true },
    role: {
      type: string,
      enum: ["user", "owner", "deliveryboy"],
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
