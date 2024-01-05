const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const UserMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.json({ message: "You are not allowed" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.json({ message: "Invalid token format." });

    const verifiedUser = jwt.verify(token, SECRET_KEY);
    if (verifiedUser) {
      req.user = verifiedUser;
      next();
    }
  } catch (error) {
    res.json({
      message: "Token verification error",
      error,
    });
  }
};

module.exports = UserMiddleware;
