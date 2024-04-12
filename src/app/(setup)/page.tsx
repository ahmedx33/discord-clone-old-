import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export default function Home() {
    const supabase = createServerComponentClient({ cookies: cookies });

    revalidatePath("/channels")

    supabase.auth.onAuthStateChange((_, session) => {
        if (!session) {
            return redirect("/login");
        }

        if (session?.access_token) {
            return redirect("/channels");
        }
    });

    return redirect("/login");
}
