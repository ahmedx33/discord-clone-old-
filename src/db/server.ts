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

export const getServers = unstable_cache(cache(async () => {
    const data = await prisma.server.findMany()
    return data
}), ["server"])