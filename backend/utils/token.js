import jwt from "jsonwebtoken";

 export const genToken = async (userId) => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Token generation failed");
  }
};

