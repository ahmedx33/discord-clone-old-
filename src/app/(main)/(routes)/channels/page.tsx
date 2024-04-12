"use client";
import {  createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Page() {
    const supabase = createClientComponentClient();
    const router = useRouter()

    const signOut = async () => {
        const { user } = (await supabase.auth.getUser()).data;
        await supabase.auth.signOut();
    };
    
    supabase.auth.onAuthStateChange((_, session) => {
        if (!session) {
            router.push("/login")
        }
    })

    return (
        <div className="flex items-start">
                <button onClick={signOut}>sign out</button>
        </div>
    );
}
