import { createServerComponentClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers"

export default function Page() {
    const supabase = createClientComponentClient()
    // const router = useRouter()

    // const signOut = async () => {
    //     const { user } = (await supabase.auth.getUser()).data
    //     await supabase.auth.signOut()
    //
    // }
    //
    // supabase.auth.onAuthStateChange((_, session) => {
    //     if (!session) {
    //         router.push("/login")
    //     }
    // })
    async function test(formData: FormData) {
        "use server"
        const { user } = (await supabase.auth.getUser()).data
        const res = {
            autherId: user?.id as string,
            name: formData.get("name") as string,
            imgUrl: formData.get("imgUrl") as string
        }
        await fetch("/auth/server/api/", { method: "POST", body: JSON.stringify(res) })

    }
    return (
        <div className="flex items-start">
            <form action={test}>
                <input name="name" type="text" />
                <input name="imgUrl" type="text" />
                <button>create</button>
            </form>
        </div>
    );
}
