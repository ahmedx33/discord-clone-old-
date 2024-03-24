import { prisma } from "@/db/prisma"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"


export const currentUser = async () => {
    const supabase = createServerComponentClient({ cookies })
    const user = (await supabase.auth.getUser()).data.user

    if (!user) return null

    const current = await prisma.user.findUnique({
        where: {
            id: user.id
        }
    })

    return current
}
