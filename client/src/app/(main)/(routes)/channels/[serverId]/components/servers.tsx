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
import { onClose as onCloseMemberList } from "@/lib/store/slices/members-list-slice";

import ModalProvider from "@/components/providers/modal-provider";
import CreateServerModal from "@/components/modals/create-server-modal";
import InviteModal from "@/components/modals/invite-modal";
import LeaveServerModal from "@/components/modals/leave-server-modal";
import { ActionTooltip } from "@/components/action-tooltip";

export default function Servers({ servers }: { servers: Server[] }) {
    const pathname = usePathname();
    const dispatch = useDispatch();

    return (
        <>
            <Link href="/channels" className="main-icon">
                <div
                    className={cn(
                        "main-blue bg-[#313338] flex items-center relative justify-center w-[50px] h-[50px] p-[10px] rounded-full  mk-Smooth cursor-pointer overflow-hidden",
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
                        <ActionTooltip key={server.id} label={server.name} side="right" align="center">
                            <li key={server.id}>
                                <Link href={`/channels/${server.id}/`} onClick={() => dispatch(onCloseMemberList())}>
                                    <div
                                        className={cn(
                                            "flex items-center relative justify-center w-[50px] h-[50px] group cursor-pointer rounded-full"
                                            
                                        )}
                                    >
                                        <div className={cn("flex items-center justify-center w-full h-full rounded-full mk-Smooth overflow-hidden", pathname.includes(server.id as string) ? "!rounded-[18px]" : "")}>
                                            <Image src={server.imgUrl} alt="icon" draggable={false} width={50} height={50} />
                                        </div>
                                        <div
                                            className={cn(
                                                "absolute w-[12px] h-[12px] bg-white rounded-full -left-[16px] duration-150   ",
                                                pathname.includes(server.id as string) ? "h-[45px]" : "group-hover:h-[22.5px]"
                                            )}
                                        ></div>
                                    </div>
                                </Link>
                            </li>
                        </ActionTooltip>
                    ))}
                </ul>
                <div
                    onClick={() => dispatch(onOpen())}
                    className={
                        "flex items-center relative justify-center w-[50px] h-[50px] p-[10px] rounded-full mk-Smooth cursor-pointer overflow-hidden text-[#23A559] bg-[#313338] hover:text-white hover:bg-[#23A559] mt-2"
                    }
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
