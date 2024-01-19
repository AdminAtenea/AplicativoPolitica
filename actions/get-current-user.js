import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export async function getUsers() {
  try {
    const { userId } = auth();

    if (userId) {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      return user;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
