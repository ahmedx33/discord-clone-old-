import { createMessage } from "@/db/message";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        await createMessage(body)

        return Response.json({ body }, { status: 200 })
    } catch (error) {
        return new NextRequest(`[CREATE_MESSAGE_ERR] ${error}`)
    }
}