import express from "express";
import dotenv from "dotenv";
import authRoutes from "./router/auth.router.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectToMongoDB();
});
