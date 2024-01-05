const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;

const User = require("../Models/UserModel");
const UserMiddleware = require("../Middleware/UserMiddleware");

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.json("User already registered");

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.json({
      message: "User Created Successfully !!",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const verifyPassword =
      user && (await bcrypt.compare(password, user.password));

    if (!user || !verifyPassword) {
      return res.json("Username or password doesn't match");
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY);
    res.json({
      message: "Login Successfull",
      token,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/profile", UserMiddleware, async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    return res.json(user);
  } catch (error) {
    res.json({
      message: "Error fetching user data",
    });
  }
});

module.exports = router;
