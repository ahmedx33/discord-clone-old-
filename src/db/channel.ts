import { unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"



export const getChannels = unstable_cache(cache(async ({ categoryId }: { categoryId: string }) => {
    const data = await prisma.channel.findMany({
        where: {
categoryId
        }
    })

    return data
}), ["channel"])


export const getChannel = unstable_cache(cache(async ({ channelId }: { channelId: string }) => {
    const data = await prisma.channel.findUnique({
        where: {
            id: channelId
        }
    })

    return data
}))

