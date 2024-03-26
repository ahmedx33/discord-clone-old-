
import { prisma } from "@/db/prisma"
import { NextRequest, NextResponse } from "next/server"
import { redirect } from "next/navigation"

export const PATCH = async (req: NextRequest, { params: { serverId } }: { params: { serverId: string } }) => {
    try {

        const { memberId } = await req.json()

        const server = await prisma.server.update({
            where: {
                id: serverId,
            },

            data: {
                members: {
                    delete: [
                        {
                            id: memberId
                        }
                    ]
                }
            }
        })

        if (!server) return redirect("/channels")
        

        return Response.json({ server }, { status: 200 })
    } catch (error) {
        return new NextResponse(`[SERVER_PATCH] ${error}`)
    }
}