import { unstable_cache } from "next/cache"
import { cache } from "react"
import { prisma } from "./prisma"

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

export const getUsers = unstable_cache(cache(async () => {
    const data = await prisma.user.findMany()
    return data
}), ["user", "userId"])

