import { prisma } from "@/db/prisma";
import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export const PATCH = async (req: NextRequest, { params: { serverId } }: { params: { serverId: string } }) => {
    try {
        const user = await currentUser()
        const { inviteLink } = await req.json()

        if (!user) return new NextResponse("Unauthorized", { status: 401 })

        const server = await prisma.server.update({
            where: {
                id: serverId,
                autherId: user.id,
            },

            data: {
                inviteLink
            }
        })

        return NextResponse.json(server)
    } catch (error) {
        return new NextResponse(`[PATCH_SERVER_ID] ${error}`, { status: 500 })
    }
}