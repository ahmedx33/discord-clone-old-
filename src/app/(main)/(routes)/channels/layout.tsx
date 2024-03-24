import { getUser } from "@/db/user";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import AddUserProvider from "@/providers/AddUserProvider";

export default async function layout({ children, nav }: { children: ReactNode; nav: ReactNode }) {
    const supabase = createServerComponentClient({ cookies: cookies });
    const { user } = (await supabase.auth.getUser()).data;
    const currentUser = await getUser({ userId: user?.id as string });
    console.log(user)

    return (
        <div className="flex bg-[#313338]">
            <AddUserProvider user={currentUser} />
            {nav}
            {children}
            
        </div>
    );
}
