import express from "express";
import dotenv from "dotenv";

const app = express();

//dotenv
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "backend/config/config.env" });
}

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes import
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

//route use
app.use("/api/v1", userRoute);

export default app;
