import { revalidatePath, unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"

export const getServers = unstable_cache(cache(async ({ autherId }: { autherId: string }) => {
    const data = await prisma.server.findMany({
        where: {
            members: {
                some: {
                    autherId
                }
            }
        }
    })

    revalidatePath("/channels");

    return data
}), ["server"])



export const getServer = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
  const server = await prisma.server.findUnique({
        where: {
            id: serverId,
        },

        include: {
            category: {
                include: {
                    channels: {
                        include: {
                            messages: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: "asc",
                },
            },
            members: true,
            roles: true,
        },
    });

    revalidatePath(`/channels/${serverId}`);

    return server
}), ["serverUnique", "serverId"])


export const getMember = unstable_cache(cache(async ({ memberId }: { memberId: string }) => {
    const data = await prisma.member.findUnique({
        where: {
            id: memberId,
        },
    })

    return data
}), ["memberUnique", "memberId"])