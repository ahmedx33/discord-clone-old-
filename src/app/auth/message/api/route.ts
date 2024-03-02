import { createMessage } from "@/db/message";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const message = await createMessage(body)
    return Response.json(body)
}