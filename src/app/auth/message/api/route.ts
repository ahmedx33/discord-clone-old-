import { createMessage, getUser } from "@/db/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const message = await createMessage(body)
    return Response.json(body)
}
