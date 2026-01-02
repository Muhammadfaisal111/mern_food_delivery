import express from "express";
import dotenv from "dotenv";
dotenv.config();
import Connectdb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  Connectdb();
  console.log(`Server is running on port ${port}`);
});
