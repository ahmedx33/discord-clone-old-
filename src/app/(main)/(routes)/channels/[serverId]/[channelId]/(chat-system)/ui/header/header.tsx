"use client";

import GetIconProvider from "@/components/providers/icon-provider";
import { BsPeopleFill } from "react-icons/bs";
import { Channel, Member, Role, User } from "@prisma/client";
import { useDispatch } from "react-redux";
import { onToggle, setMembersListData } from "@/lib/store/slices/members-list-slice";

interface HeaderProps {
    channel: Channel;
    members: Member[];
    users: User[];
    roles: Role[];
}

export default function Header({ channel, members, users, roles }: HeaderProps) {
    const dispatch = useDispatch()
    const payload = {
        users,
        roles,
        members,
    }
    
    return (
        <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center justify-between px-4 pr-[23rem] fixed top-0 z-50 bg-[#313338] text-white font-bold gap-2">
            <div className="flex items-center gap-2">
                <GetIconProvider type={channel?.type as string} size={25} /> {channel?.name}
            </div>
            <BsPeopleFill size={22} className="text-[#B5BAC1] hover:text-[#DBDEE1] cursor-pointer" onClick={() => {
                dispatch(onToggle())
                dispatch(setMembersListData(payload))
            }} />
        </div>
    );
}
