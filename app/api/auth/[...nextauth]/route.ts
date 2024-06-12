import NextAuth from "next-auth";
import { Account, User as authUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/database/connect";
import bcrypt from "bcryptjs";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async session({ session, user }: any) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.username = dbUser.username;
        session.user.firstname = dbUser.firstname;
        session.user.lastname = dbUser.lastname;
        session.user.bio = dbUser.bio;
        session.user.courses = dbUser.courses;
        session.user.facebook = dbUser.facebook;
        session.user.linkedin = dbUser.linkedin;
        session.user.github = dbUser.github;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.username = user.username;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.bio = user.bio;
        token.courses = user.courses;
        token.facebook = user.facebook;
        token.linkedin = user.linkedin;
        token.github = user.github;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
