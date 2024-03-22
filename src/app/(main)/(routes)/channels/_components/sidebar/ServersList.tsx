

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import { getServers } from "@/db/server";
import Servers from "./Servers";

export default async function ServersList() {
    const supabase = createServerComponentClient({ cookies: cookies });
    const { user } = (await supabase.auth.getUser()).data;
    const servers = await getServers({ authorId: user?.id as string });


    return (
        <div className="flex flex-col gap-2 bg-[#1E1F22] w-fit h-screen p-2">
        <Servers servers={servers}/>
        </div>
    );
}
