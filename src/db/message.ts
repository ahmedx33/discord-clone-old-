import { unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"



export const createMessage = async ({ id, title, memberId, channelId, replyTo }: MessageInterFace) => {
    const data = await prisma.message.create({
        data: {
            id,
            channelId,
            memberId,
            title,
            replyTo
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
