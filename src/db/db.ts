
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


export const getMemeberInServer = unstable_cache(cache(async ({ autherId, serverId }: { autherId?: string, serverId?: string }) => {
    const data = await prisma.member.findMany()

    console.log(data)
}), ["member"])

export const createMessage = async ({ title, memberId, channelId }: { title: string, memberId: string, channelId: string }) => {
    const data = await prisma.message.create({
        data: {
            memberId: memberId,
            channelId: channelId,
            title: title
        }
    })
} 
