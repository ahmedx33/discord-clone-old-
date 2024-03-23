import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";
import Sections from "./_components/landing/sections";
import { redirect, useRouter } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
    const supabase = createServerComponentClient({ cookies: cookies });

    supabase.auth.onAuthStateChange((_, session) => {
        if (!session) {
            redirect("/login");
        }

        if (session?.access_token) {
            redirect("/channels");
        }
    });

    return (
        <div className="min-h-screen w-full ">
            <Header />
            <Sections />
            <Footer />
        </div>
    );
}
