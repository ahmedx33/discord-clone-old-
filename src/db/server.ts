import { unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"

export const getServers = unstable_cache(cache(async () => {
    const data = await prisma.server.findMany()
    return data
}), ["server"])