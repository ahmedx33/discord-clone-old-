
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
    const data = await prisma.server.findMany({
        where: {
            autherId: authorId
        }
    })
    return data
}), ["server"])

