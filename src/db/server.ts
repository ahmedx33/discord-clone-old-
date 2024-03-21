import { unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"

export async function createServer({ name, imgUrl, autherId }: { name: string, imgUrl: string, autherId: string }) {
    const data = await prisma.server.create({
        data: {
            name: name,
            imgUrl: imgUrl,
            autherId: autherId,
        }
    })
}

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


export const deleteServer = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
    const data = await prisma.server.delete({
        where: {
            id: serverId
        }
    })
    return data
}), ["server", "serverId"])

export const getMembers = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
    const data = await prisma.member.findMany({
        where: {
            serverId
        }
    })
    return data
}), ["server", "serverId"])


export const getRules = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
    const data = await prisma.rule.findMany({
        where: {
            serverId
        }
    })
    return data
}), ["rule", "ruleId"])
