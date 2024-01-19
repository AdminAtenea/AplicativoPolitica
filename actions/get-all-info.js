import prisma from "@/lib/prismadb";

export async function getAllInfo() {
  try {
    const info = await prisma.$transaction([
      prisma.leader.count(),
      prisma.voter.count(),
      prisma.meeting.count(),
    ]);
    return info;
  } catch (error) {
    console.log(error);
  }
}
