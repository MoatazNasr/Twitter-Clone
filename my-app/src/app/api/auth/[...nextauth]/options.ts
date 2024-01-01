import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/src/types/user";
import prisma from "@/src/lib/prisma";
import bcrypt from "bcrypt";
import customAdapter from "@/src/lib/customAdapter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const options: NextAuthOptions = {
adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<User | null> {
        try {
          const res = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });
          const user: User | null = res ;
          const truthyValue = await bcrypt.compare(
            credentials?.password as string,
            user?.password as string
          );
          if (truthyValue) return user;
          else if (user && !truthyValue) throw Error("Wrong Password");
          else return null;
        } catch (err) {
          throw err;
        }
      },
    }),
  ],
  callbacks: {
  async jwt({token,user,session}) {
  console.log({token,user,session})
  return token;
  },
  async session({token,user,session}) {
    console.log({token,user,session})
    return session;
    }
  },
  session: {
    strategy:"jwt"
},
secret: process.env.NEXTAUTH_SECRET
};
export default options;
