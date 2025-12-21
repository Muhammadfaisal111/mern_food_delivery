import express from "express";
import dotenv from "dotenv";
import Connectdb from "./config/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  Connectdb();
  console.log(`Server is running on port ${port}`);
});
