import User from "@/models/User";
import connectDB from "@/database/connect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const PATCH = async (request: any) => {
  const {
    username,
    firstname,
    lastname,
    profilepic,
    email,
    bio,
    courses,
    facebook,
    linkedin,
    github,
  } = await request.json();
  await connectDB();

  const session = await getServerSession();
  console.log(session);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  console.log(firstname, username);

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user?.email }, // Assuming email is unique and used to find the user
      {
        username,
        firstname,
        lastname,
        profilepic,
        bio,
        courses,
        facebook,
        linkedin,
        github,
      },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }
    console.log("Updated user:", updatedUser);
    return new NextResponse(JSON.stringify(updatedUser), { status: 200 });
  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 });
  }
};
