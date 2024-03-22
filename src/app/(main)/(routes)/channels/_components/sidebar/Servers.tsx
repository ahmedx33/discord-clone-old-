"use client"

import Link from "next/link"
import { Server } from "./components/server/Server";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Servers({ servers }: { servers: ServerInterface[] }) {
    const pathname = usePathname()
    return (
        <>

            <Link href="/channels" className="main-icon">
                <Server defaultBg className={`main-blue ${pathname === "/channels" ? "!rounded-[17px] !bg-blue" : ""}`} width={30} height={30} icon="/svgs/discord.svg" name="Direct Messages" />
            </Link>
            <Separator className="py-[1px] rounded-full bg-[#313338]" />
            <div className="channels">
                <ul className="flex flex-col gap-2">
                    {servers.map((server) => (
                        <li key={server.id}>
                            <Link href={`/channels/${server.id}/`}>
                                <Server className={`${pathname.includes(server.id as string) ? "!rounded-[17px]" : ""}`} icon={"/voll.png"} name={server.name} width={60} height={60} />
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Server defaultBg className="main-green" icon="/svgs/addServer.svg" name="General" width={25} height={25} />
                    </li>
                    <li>
                        <Server defaultBg className="main-green" icon="/svgs/exploreServer.svg" name="General" width={25} height={25} />
                    </li>
                </ul>
            </div>
        </>
    )
}
