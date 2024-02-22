import { createUser } from "@/db/user";



export async function test(id: string) {
    await createUser({ userId: id as string, email: "test", userName: "test", displayName: "test" })
}
