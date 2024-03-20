import { getMembers } from "@/db/member"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const serverId = searchParams.get("serverId")
    const servers = await getMembers({ serverId: serverId as string })
    return Response.json({ servers }, { status: 200 })
}
