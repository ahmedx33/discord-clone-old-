"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { HiPlus } from "react-icons/hi";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { Server } from "@prisma/client";

import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { onOpen } from "@/lib/store/slices/create-server-modal-slice";

import ModalProvider from "@/components/providers/modal-provider";
import CreateServerModal from "@/components/modals/create-server-modal";
import InviteModal from "@/components/modals/invite-modal";
import LeaveServerModal from "@/components/modals/leave-server-modal";


export default function Servers({ servers }: { servers: Server[] }) {
    const pathname = usePathname();
    const dispatch = useDispatch();

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
            <div className="servers">
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
                <div
                    onClick={() => dispatch(onOpen())}
                    className={cn(
                        `flex items-center relative justify-center w-[50px] h-[50px] p-[10px] rounded-full mk-Smooth cursor-pointer overflow-hidden text-[#23A559] bg-[#313338] hover:text-white hover:bg-[#23A559]`
                    )}
                >
                    <HiPlus size={25} />
                </div>
            </div>

            <ModalProvider>
                <CreateServerModal />
                <InviteModal />
                <LeaveServerModal />
            </ModalProvider>
        </>
    );
}
