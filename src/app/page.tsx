import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";
import Sections from "./_components/landing/sections";
import { cookies } from "next/headers";

export default async function Home() {

    const supabase = createServerComponentClient({ cookies: cookies })


    return (
        <div className="min-h-screen w-full">
            <Header />
            <Sections />
            <Footer />
        </div>
    );
}
