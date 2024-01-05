const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const UserMiddleware = (req, res, next) => {
  try {
    const authHeader = req.header.Authorization;

    if (!authHeader) return res.json("You are not allowed");

    const token = authHeader.split(" ")[1];

    const verifiedUser = jwt.verify(token, SECRET_KEY);

    if (verifiedUser) {
      next();
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = UserMiddleware;
