import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import config from "./config";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import path from "path";

mongoose
  .connect(config.dbConnection as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

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

app.get("/api/health", (req, res) => {
  res.status(200).send("Health is OK!");
  return;
});

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(7000, () => {
  console.log(`server running on http://localhost:7000`);
});
