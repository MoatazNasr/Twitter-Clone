import prisma from "@/src/lib/prisma";
import bcrypt from "bcrypt";
import User from "@/src/types/user";
import { NextResponse } from "next/server";
export async function POST(req: Request): Promise<User | any> {
  try {
    let requestData = await req.json();
    const ifUserExists = await prisma.user.findUnique({
      where: { email: requestData.email },
    });
      if (ifUserExists) return "User Exists";
    const hashedPassword: string = await bcrypt.hash(requestData.password, 3);
    const newUser: User = await prisma.user.create({
      data: {
        name: requestData.name,
        email: requestData.email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(newUser);
  } catch (err) {
    console.log(err);
  }
  await prisma.user.deleteMany();
  await prisma.account.deleteMany();
}
