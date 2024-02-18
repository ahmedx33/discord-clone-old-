"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Page() {
    const supabase = createClientComponentClient()
    const router = useRouter()
    const signOutHandler = async () => {
        await supabase.auth.signOut()
    }

    supabase.auth.onAuthStateChange((_, session) => {
        if (!session?.access_token) {
            router.push("/login")
        } else {
            console.log("in channels")
        }
    })

    return (
        <div>
            <button onClick={signOutHandler}>sign out</button>
        </div>
    );
}
