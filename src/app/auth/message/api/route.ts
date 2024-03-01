import { createMessage, getUser } from "@/db/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const message = await createMessage(body)
    return Response.json(body)
}



export const GET = async (req: NextRequest) => {
    const memberId = req.headers.get("memberId")
    const user = await getUser({ userId: memberId as string })
    return Response.json(user, { status: 200 })
}
