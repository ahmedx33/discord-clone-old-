import { getMemeber, getUser } from "@/db/db"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Message({ message }: { message: any }) {
    const supabase = createServerComponentClient({ cookies: cookies })
    const id = (await supabase.auth.getUser()).data.user?.id

    const member = await getMemeber({ autherId: id })

    return (
        <div>
            <div className="text-white hover:underline">{message.memberId}</div>
            <div className="text-white">{message.title}</div>
        </div>
    )
}
