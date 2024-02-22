"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function login(formData: FormData) {
    const supabase = createServerComponentClient({ cookies: cookies })
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.get("email") as string,
        password: formData.get("pass") as string
    })


    console.log(data)
}
