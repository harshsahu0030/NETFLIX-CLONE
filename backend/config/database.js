import mongoose from "mongoose";

const connectDatabase = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connection established ${process.env.MONGO_URI}`);
  } catch (err) {
    console.log(`MongoDB error : ${err}`);
  }
};

export default connectDatabase;
