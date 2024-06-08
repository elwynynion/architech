import User from "@/models/User";
import connectDB from "@/database/connect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { username, email, password } = await request.json();

  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
