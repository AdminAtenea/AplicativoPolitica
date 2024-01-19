import prisma from "@/lib/prismadb";

export async function getLeaders(select = {}) {
  try {
    const leaders = await prisma.leader.findMany({
      select,
      orderBy: {
        createdAt: "desc",
      },
    });
    return leaders;
  } catch (error) {
    console.log(error);
  }
}
