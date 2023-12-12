import express from "express";
import {
  isRegisteredUser,
  loginUser,
  logoutUser,
  registerUser,
  updatePassword,
  updateProfile,
} from "../controller/userController.js";
import isAuthenticated from "../middleware/auth.js";

const router = express.Router();

router.route("/isregistered").post(isRegisteredUser);

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(isAuthenticated, logoutUser);

router.route("/profile/update").put(isAuthenticated, updateProfile);

router.route("/password/update").put(isAuthenticated, updatePassword);

export default router;
