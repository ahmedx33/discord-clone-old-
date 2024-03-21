"use client"

import GetIconProvider from "@/providers/GetIconProvider";
import { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import ServerMembers from "../../../membersList/ServerMembers";

export default function Header({ channel, members, users , rules}: { channel: ChannelInterFace | null,  members: MemberInterface[], users: UserInterFace[], rules: RuleInterface[] }) {
    const [toggleMembersList, setToggleMembersList] = useState<boolean>(false)
    return <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center justify-between px-4 pr-[23rem] fixed top-0 z-50 bg-[#313338] text-white font-bold gap-2"><div className="flex items-center gap-2"><GetIconProvider type={channel?.type as string} size={25} /> {channel?.name} </div> <BsPeopleFill size={22} className="text-[#B5BAC1] hover:text-[#DBDEE1] cursor-pointer" onClick={() => setToggleMembersList(prev => !prev)} />
        {toggleMembersList && <ServerMembers  users={users} rules={rules} members={members} />}
    </div>;

}




