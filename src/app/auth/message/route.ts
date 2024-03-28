import { createMessage } from "@/db/message";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const newMessage = await createMessage(body)

        return Response.json({ newMessage }, { status: 200 })
    } catch (error) {
        return new NextResponse(`[CREATE_MESSAGE_ERR] ${error}`)
    }
}