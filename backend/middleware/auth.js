import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "You must be logged in",
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await UserModel.findById(decoded._id);

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default isAuthenticated;
