"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Server } from "@prisma/client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Servers({ servers }: { servers: Server[] }) {
    const pathname = usePathname();
    return (
        <>
            <Link href="/channels" className="main-icon">
                <div
                    className={cn(
                        "main-blue flex items-center relative justify-center w-[50px] h-[50px] p-[10px] rounded-full mk-Smooth cursor-pointer overflow-hidden",
                        pathname === "/channels" ? "!rounded-[17px] !bg-blue" : ""
                    )}
                >
                    <Image className="absolute" src="/svgs/discord.svg" alt="icon" draggable={false} width={30} height={30} />
                </div>
            </Link>
            <Separator className="py-[1px] rounded-full bg-[#313338]" />
            <div className="channels">
                <ul className="flex flex-col gap-2">
                    {servers.map((server) => (
                        <li key={server.id}>
                            <Link href={`/channels/${server.id}/`}>
                                <div
                                    className={cn(
                                        `flex items-center relative justify-center w-[50px] h-[50px] p-[10px] rounded-full mk-Smooth cursor-pointer overflow-hidden `,
                                        pathname.includes(server.id as string) ? "!rounded-[17px]" : ""
                                    )}
                                >
                                    <Image className="absolute" src="/voll.png" alt="icon" draggable={false} width={60} height={60} />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
