import { revalidatePath, unstable_cache } from "next/cache"
import { prisma } from "./prisma"
import { cache } from "react"

export const getServers = unstable_cache(cache(async ({ autherId }: { autherId: string }) => {
    const data = await prisma.server.findMany({
        where: {
            members: {
                some: {
                    autherId
                }
            }
        }
    })

    revalidatePath("/channels");
    
    return data
}), ["server"])