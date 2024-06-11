import User from "@/models/User";
import connectDB from "@/database/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: any) => {
  const { username, email, password } = await request.json();
  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email already exist", {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
