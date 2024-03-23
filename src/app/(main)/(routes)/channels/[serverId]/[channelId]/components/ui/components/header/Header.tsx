"use client";

import GetIconProvider from "@/providers/GetIconProvider";
import { useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import ServerMembersList from "../../../membersList/ServerMembersList";
import { useLocalStoreage } from "@/hooks/useLocalStoreage";
import { Channel, Member, Rule, User } from "@prisma/client";

export default function Header({ channel, members, users, rules }: { channel: Channel; members: Member[]; users: User[]; rules: Rule[] }) {
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
            {toggleMembersList && <ServerMembersList users={users} rules={rules} members={members} />}
        </div>
    );
}