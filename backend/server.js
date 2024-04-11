import express from "express";
import dotenv from "dotenv";

import authRoutes from "./router/auth.router.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./router/message.router.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req, res) => {
  res.send("chat app api");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectToMongoDB();
});
