import prisma from "@/lib/prismadb";

export async function getMeetings() {
  try {
    const meetings = await prisma.meeting.findMany({
      select: {
        id: true,
        place: true,
        date: true,
        leader: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return meetings;
  } catch (error) {
    console.log(error);
  }
}
