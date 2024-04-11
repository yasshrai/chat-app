import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    if (!token) {
      return res.status(401).json({ error: "unauthorized - No token provide" });
    }

    if (!decoded) {
      return res.status(401).json({ error: "unauthorized -Invalid User" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    req.user = user;
    next();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log("error in protectroute middleware", error.message);
    res.status(500).json({ error: "interval server error" });
  }
};

export default protectRoute;
