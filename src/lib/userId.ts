import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"


export const getUserId = async () => {
    const supabase = createClientComponentClient()
    const { user } = (await supabase.auth.getUser()).data
    const userId = user?.id

    return userId
}