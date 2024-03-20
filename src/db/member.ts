import { unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"




export const getMembers = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
    const data = await prisma.member.findMany({
        where: {
            serverId
        }
    })
    return data
}), ["member", "memberId"])
