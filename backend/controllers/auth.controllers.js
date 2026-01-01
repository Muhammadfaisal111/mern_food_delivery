import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { genToken } from "../utils/genToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, mobile, role } = req.body;
    const user = User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    if (mobile.length < 10) {
      return res.status(400).json({ message: "Invalid mobile number" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      mobile,
      role,
    });
    const token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
