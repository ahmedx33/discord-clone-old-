"use client"
import { Separator } from "@/components/ui/separator";
import { Channel } from "./components/Channel";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ChannelsList() {

    const channels = [
        { img: "/voll.png", name: "General", id: 1 },
        { img: "/voll.png", name: "General", id: 2 },
        { img: "/voll.png", name: "General", id: 3 },
        { img: "/voll.png", name: "General", id: 4 },
    ]
    const pathname = usePathname()

    return (
        <div className="flex flex-col gap-2 bg-[#1E1F22] w-fit h-screen p-2">
            <Link href={"/channels"} className="main-icon"><Channel defaultBg className={`main-blue ${pathname === "/channels" ? "!rounded-[17px] !bg-blue" : ""}`} width={30} height={30} icon="/svgs/discord.svg" name="Direct Messages" /></Link>
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
