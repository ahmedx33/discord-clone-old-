
import { PrismaClient } from '@prisma/client'
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


export async function getServers({ authorId }: { authorId: string }) {
    const data = await prisma.server.findMany({
        where: {
            autherId: authorId
        }
    });


    return data
}

