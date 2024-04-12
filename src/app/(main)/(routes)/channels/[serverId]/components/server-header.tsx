"use client";

import { IoIosArrowDown } from "react-icons/io";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Member, Server } from "@prisma/client";
import { useDispatch } from "react-redux";
import { onOpen, setServerData } from "@/lib/store/slices/invite-modal-slice";
import { useEffect, useState } from "react";
import { onOpenLeave, setLeaveData } from "@/lib/store/slices/leave-server-modal-slice";

interface ServerHeaderProps {
    server: Server;
    member: Member;
    serverId: string;
}

export default function ServerHeader({ server, member, serverId }: ServerHeaderProps) {
    const dispatch = useDispatch();
    const [isMount, setIsMount] = useState<boolean>(false);
    console.log(server);
    useEffect(() => {
        setIsMount(true);

        if (isMount) dispatch(setServerData(server));

        return () => {
            setIsMount(false);
        };
    }, [isMount, dispatch, server]);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full focus:outline-none flex justify-between" asChild>
                    <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center px-4 cursor-pointer transition duration-200 hover:bg-[#35373C] select-none">
                        <h1 className="text-white text-[1.1rem] font-bold">{server.name}</h1>
                        <IoIosArrowDown size={20} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => dispatch(onOpen())}>
                        <div className="text-[#777fd3] px-3 flex items-center justify-between w-52 ">
                            <p className="text-[1.1rem]">Invite People</p> <FaUserPlus size={25} />
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                            dispatch(onOpenLeave());
                            dispatch(setLeaveData({ serverId: serverId, memberId: member.id }));
                        }}
                    >
                        <div className="text-red-500 px-3 flex items-center justify-between w-52 ">
                            <p className="text-[1.1rem]">Leave Server</p> <TbSquareRoundedArrowRightFilled size={25} />
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
