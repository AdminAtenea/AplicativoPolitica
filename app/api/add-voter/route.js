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

    const voter = await prisma.voter.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json({ success: true, ...voter });
  } catch (error) {
    console.log(error, "ERROR_VOTER");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
