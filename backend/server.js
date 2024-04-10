import express from "express";
import dotenv from "dotenv";

import authRoutes from "./router/auth.router.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("chat app api");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectToMongoDB();
});
