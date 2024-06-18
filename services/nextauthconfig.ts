import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import connectDB from '@/database/connect';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          await connectDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null; // User not found
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null; // Incorrect password
          }

          return user; // Successful login
        } catch (error: any) {
          console.log('Error: ', error);
          return null; // Generic error handling
        }
      },
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
        session.user.profilepic = dbUser.profilepic;
        session.user.bio = dbUser.bio;
        session.user.courses = dbUser.courses;
        session.user.facebook = dbUser.facebook;
        session.user.linkedin = dbUser.linkedin;
        session.user.github = dbUser.github;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

export default authOptions;
