"use client";
import { createServerComponentClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";

export default function Page() {
    const supabase = createClientComponentClient();
    // const router = useRouter()

    const signOut = async () => {
        const { user } = (await supabase.auth.getUser()).data;
        await supabase.auth.signOut();
    };
    //
    // supabase.auth.onAuthStateChange((_, session) => {
    //     if (!session) {
    //         router.push("/login")
    //     }
    // })

    async function test(formData: FormData) {
        const { user } = (await supabase.auth.getUser()).data;
        const data = {
            autherId: user?.id as string,
            name: formData.get("name") as string,
            imgUrl: formData.get("imgUrl") as string,
        };
        await axios.post("/auth/server/api/", data);
    }
    return (
        <div className="flex items-start">
            <form action={test}>
                <input name="name" type="text" />
                <input name="imgUrl" type="text" />
                <button>create</button>
                <button onClick={signOut}>sign out</button>
            </form>
        </div>
    );
}
