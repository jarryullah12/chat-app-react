import express from "express";
import mongoose from "mongoose";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
// config({ path: ".env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

dotenv.config();
mongoose.set("strictQuery", true);

const cors = require('cors');

app.use(cors({ 
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,

 }));


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    limits: {
      fileSize: 1024 * 1024 * 5, // 5MB
    },
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

app.use(errorMiddleware);
export default app;

