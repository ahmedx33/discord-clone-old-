import { createServer, getMessages } from "@/db/db";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const server = await createServer(data)

    revalidatePath("/channels")
    return Response.json(data)
}


export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const channelId = searchParams.get("channelId")
    const messages = await getMessages({ channelId: channelId as string })

    return Response.json({ messages }, { status: 200 })
}
