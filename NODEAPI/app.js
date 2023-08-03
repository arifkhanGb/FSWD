import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import {config} from "dotenv";


export const app = express();

config({
  path: "./data/config.env",
})

const router = express.Router();


app.use(express.json());
app.use("/users",userRouter);
 
app.get("/", (req, res) => {
  res.send("ready to make api");
});










