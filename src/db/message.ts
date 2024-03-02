import { unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"



export const createMessage = async ({ title, memberId, channelId }: { title: string, memberId: string, channelId: string }) => {
    const data = await prisma.message.create({
        data: {
            channelId: channelId,
            memberId: memberId,
            title: title
        }
    })
}


export const getMessages = unstable_cache(cache(async ({ channelId }: { channelId: string }) => {
    const data = await prisma.message.findMany({
        where: {
            channelId: channelId
        }
    })
    return data
}), ["messages"])
