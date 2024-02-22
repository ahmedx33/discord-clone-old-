"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";
import Sections from "./_components/landing/sections";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
    const supabase = createClientComponentClient()
    const router = useRouter()

    supabase.auth.onAuthStateChange((_, session) => {
        if (!session) {
            redirect("/login")
        }

        if (session?.access_token) {
            router.push("/channels")
        }
    })


    return (
        <div className="min-h-screen w-full">
            <Header />
            <Sections />
            <Footer />
        </div>
    );
}
