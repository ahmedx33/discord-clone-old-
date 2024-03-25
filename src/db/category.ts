import { unstable_cache } from "next/cache"
import { cache } from "react"
import { prisma } from "./prisma"


export const getCategorys = unstable_cache(cache(async ({ serverId }: { serverId: string }) => {
    const data = await prisma.category.findMany({
        where: {
            serverId
        }
    })
    return data
}), ["category"])
