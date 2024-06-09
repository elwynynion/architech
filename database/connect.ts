import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  const mongoUrl: string = process.env.MONGODB_URL as string;

  if (!mongoUrl) {
    throw new Error("MONGODB_URL environment variable is not set");
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export default connectDB;
