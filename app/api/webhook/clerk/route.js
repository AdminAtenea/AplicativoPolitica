import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const evt = await request.json();

    const id = evt.data.id;
    const username = evt.data.username;
    const email = evt.data.email_addresses[0].email_address;

    switch (evt.type) {
      case "user.created":
        try {
          const user = await prisma.user.create({
            data: {
              id,
              username,
              email,
            },
          });
        } catch (err) {
          console.log(err, "ERROR_CREATE_USER");
          return NextResponse.json({ success: false });
        } finally {
          break;
        }
      case "user.deleted":
        try {
          const user = await prisma.user.delete({
            where: {
              id,
            },
          });
        } catch (error) {
          console.log(error, "ERROR_DELETE_USER");
          return NextResponse.json({ success: false });
        } finally {
          break;
        }
      case "user.updated":
        try {
          const user = await prisma.user.update({
            where: {
              id,
            },
            data: {
              username,
              email,
            },
          });
        } catch (err) {
          console.log(err, "ERROR_UPDATE_USER");
          return NextResponse.json({ success: false });
        } finally {
          break;
        }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error, "ERROR_SETTINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
