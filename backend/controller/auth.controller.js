import User from "../models/user.model.js";
import bcrypyt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      res.status(400).json({ error: "password do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username alreay exists" });
    }

    const salt = await bcrypyt.genSalt(10);
    const hashedPassword = await bcrypyt.hash(password, salt);

    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyprofilepic : girlprofilepic,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        userName: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({
      error: "internal server error",
    });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypyt.compare(
      password,
      user?.password || ""
    );

    if (!user || isPasswordCorrect) {
      return res.status(400).json({ error: "invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
export const logout = (req, res) => {
  console.log("logout");
};
