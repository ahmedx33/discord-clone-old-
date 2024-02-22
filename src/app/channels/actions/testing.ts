"use server"

import { createServer } from "@/db/user"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function test(formData: FormData) {
    const supabase = createServerComponentClient({ cookies: cookies })
    const { user } = (await supabase.auth.getUser()).data

    const data = {
        name: formData.get("name") as string,
        imgUrl: formData.get("imgUrl") as string,
        autherId: user?.id as string
    }

    console.log(user?.id)
    await createServer(data)

}
