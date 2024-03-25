"use client";

import GetIconProvider from "@/components/providers/icon-provider";
import { useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import ServerMembersList from "../../../membersList/server-members-list";
import { useLocalStoreage } from "@/hooks/useLocalStoreage";
import { Channel, Member, Role, User } from "@prisma/client";

interface HeaderProps {
    channel: Channel;
    members: Member[];
    users: User[];
    roles: Role[];
}

export default function Header({ channel, members, users, roles }: HeaderProps) {
    const [storedValue, setValue] = useLocalStoreage("membersList", false);
    const [toggleMembersList, setToggleMembersList] = useState<boolean>(false);

    useEffect(() => {
        let mount = true;
        if (mount) {
            setValue(toggleMembersList);
        }

        return () => {
            mount = false;
        };
    }, [toggleMembersList, setValue]);

    return (
        <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center justify-between px-4 pr-[23rem] fixed top-0 z-50 bg-[#313338] text-white font-bold gap-2">
            <div className="flex items-center gap-2">
                <GetIconProvider type={channel?.type as string} size={25} /> {channel?.name}{" "}
            </div>{" "}
            <BsPeopleFill size={22} className="text-[#B5BAC1] hover:text-[#DBDEE1] cursor-pointer" onClick={() => setToggleMembersList((prev) => !prev)} />
            {toggleMembersList && <ServerMembersList users={users} roles={roles} members={members} />}
        </div>
    );
}
