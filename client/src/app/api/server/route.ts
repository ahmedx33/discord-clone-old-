import { v4 as uuidv4 } from "uuid"
import { prisma } from "@/db/prisma";
import { currentUser } from "@/lib/current-user";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    try {
        const { name, serverImg } = await req.json()
        
        const user = await currentUser()

        if (!user) return new NextResponse("Unauthorized", { status: 401 })

        const server = await prisma.server.create({
            data: {
                autherId: user?.id,
                name,
                imgUrl: serverImg,
                inviteLink: uuidv4(),
                category: {
                    create: [
                        {
                            title: "chat", channels: {
                                create: [
                                    { name: "general" }
                                ]
                            }
                        },
                    ],
                },
                members: {
                    create: [
                        { autherId: user?.id as string, roles: ["owner"] }
                    ]
                },

                roles: {
                    create: [
                        { name: "owner", color: "#949BA4" },
                        { name: "members", color: "#949BA4" }
                    ]
                },
                
            }
        })

        revalidatePath("/channels")

        return Response.json(server)
    } catch (error) {
        return new NextResponse(`[SERVER_POST_ERR] ${error}`, { status: 500 })
    }
}


