
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    await createUser({
        email: "owQoK@example.com",
        userName: "testUser",
        displayName: "testUser"
    })
}
export async function createUser({ email, userName, displayName }) {
    const data = await prisma.user.create({
        data: {
            email: "owQoK@example.com",
            userName: "testUser",
            displayName: "testUser",
            imgUrl: ""
        }
    })


    console.log(data)
}



main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
