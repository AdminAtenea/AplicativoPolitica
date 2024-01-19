import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();

    const leader = await prisma.leader.create({
      data: {
        ...body,
      },
    });
    return NextResponse.json({ success: true, ...leader });
  } catch (error) {
    console.log(error, "ERROR_LEADER");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
