
import { PrismaClient } from '@prisma/client'
import { unstable_cache } from 'next/cache'
import { cache } from 'react'
const prisma = new PrismaClient()

export async function createUser({ userId = '', email, userName, displayName }: { userId: string, email: string, userName: string, displayName: string }) {
    const data = await prisma.user.create({
        data: {
            id: userId,
            email: email,
            userName: userName,
            displayName: displayName,
            imgUrl: ""
        }
    })
}

export const getUser = unstable_cache(cache(async ({ userId }: { userId: string }) => {
    const data = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    return data
}), ["user", "userId"])


export async function createServer({ name, imgUrl, autherId }: { name: string, imgUrl: string, autherId: string }) {
    const data = await prisma.server.create({
        data: {
            name: name,
            imgUrl: imgUrl,
            autherId: autherId,
        }
    })
}

export const getChannels = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
    const data = await prisma.channel.findMany({
        where: {
            serverId: serverId
        }
    })

    return data
}), ["channel"])

export const getServers = unstable_cache(cache(async ({ authorId }: { authorId: string }) => {
    const data = await prisma.server.findMany()
    return data
}), ["server"])


export const getServer = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
    const data = await prisma.server.findUnique({
        where: {
            id: serverId
        }
    })
    return data
}), ["server", "serverId"])


export const getMemeber = unstable_cache(cache(async ({ autherId }: { autherId?: string }) => {
    const data = await prisma.member.findFirst({
        where: {
            autherId: autherId
        }
    })

    return data

}), ["member"])

export const createMessage = async ({ title, memberId, channelId }: { title: string, memberId: string, channelId: string }) => {
    const data = await prisma.message.create({
        data: {
            channelId: channelId,
            memberId: memberId,
            title: title
        }
    })
}


export const getMessages = async ({ channelId }: { channelId: string }) => {
    const data = await prisma.message.findMany({
        where: {
            channelId: channelId
        }
    })

    return data
}
