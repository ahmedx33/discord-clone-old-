import { unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"



export const getMemebers = unstable_cache(cache(async ({ serverId }: { serverId?: string }) => {
    const data = await prisma.member.findFirst({
        where: {
            serverId
        }
    })

    return data

}), ["member"])

