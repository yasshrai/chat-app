import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./router/auth.router.js";
import messageRoutes from "./router/message.router.js";
import userRoutes from "./router/user.router.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("chat app api");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectToMongoDB();
});
