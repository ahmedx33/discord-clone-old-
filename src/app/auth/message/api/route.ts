import { createMessage } from "@/db/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const message = await createMessage(body)
    console.log(message)
    return Response.json(body)
}
