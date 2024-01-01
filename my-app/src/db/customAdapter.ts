import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import prisma from "@/src/db/prisma";

export default function customAdapter(p: typeof prisma): {} {
  return {
    ...PrismaAdapter(p),
    createUser: async (res: any) => {
    await prisma.user.deleteMany();
    await prisma.account.deleteMany();
      const hashedPassword: string = await bcrypt.hash(res.email, 3);
      const createdUser = await prisma.user.create({
        data: {
          name: res.name,
          email: res.email,
          password: hashedPassword,
          image: res.image
        },
      }); 
      const createdAccount = await prisma.account.create({
        data: {
          userId: createdUser.id,
          provider: 'googleيشسيش',
          providerAccountId: "idkdasdas",
          type: "0auth"
        },
      }); 
      console.log(createdUser);
      console.log(createdAccount);

    },
  };
}
