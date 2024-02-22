import { Separator } from "@/components/ui/separator";
import { Channel } from "./components/Channel";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getServers } from "@/db/user";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { headers } from "next/headers";

export default async function ChannelsList() {
    const supabase = createServerComponentClient({ cookies: cookies })
    const { user } = (await supabase.auth.getUser()).data
    const channels = await getServers({ authorId: user?.id as string })
    const headersList = headers();
    const pathname = headersList.get("x-invoke-path") || "";
    console.log(headersList)

    return (
        <div className="flex flex-col gap-2 bg-[#1E1F22] w-fit h-screen p-2">
            <Link href="/channels" className="main-icon"><Channel defaultBg className={`main-blue ${pathname === "/channels" ? "!rounded-[17px] !bg-blue" : ""}`} width={30} height={30} icon="/svgs/discord.svg" name="Direct Messages" /></Link>
            <Separator className="py-[1px] rounded-full bg-[#313338]" />
            <div className="channels">
                <ul className="flex flex-col gap-2">
                    {channels.map((channel) => <li key={channel.id}><Link href={`/channels/${channel.id}`}><Channel className={`${pathname === `/channels/${channel.id}` ? "!rounded-[17px]" : ""}`} icon={channel.img} name={channel.name} width={60} height={60} /></Link></li>)}
                    <li>
                        <Channel defaultBg className="main-green" icon="/svgs/addServer.svg" name="General" width={25} height={25} />
                    </li>
                    <li>
                        <Channel defaultBg className="main-green" icon="/svgs/exploreServer.svg" name="General" width={25} height={25} />
                    </li>
                </ul>
            </div>
        </div >
    );
}
