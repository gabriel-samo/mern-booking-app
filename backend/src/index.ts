import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";

mongoose.connect(config.dbConnection);

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.app.frontendUrl,
    credentials: true
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(config.app.port, () => {
  console.log(`server running on http://${config.app.host}:${config.app.port}`);
});
