import connectDB from "@/database/connect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const {
      username, email, password
    } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await connectDB();

    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered." }, { status: 200 });
  } catch (error: any){
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}