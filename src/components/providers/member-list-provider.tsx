"use client";

import ServerMembersList from "@/app/(main)/(routes)/channels/[serverId]/[channelId]/components/membersList/server-members-list";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";

export default function MemberListProvider() {
    const { isOpen, data } = useSelector((state: RootState) => state.membersList);
    const { users, members, roles } = data;

    return <>{isOpen && <ServerMembersList users={users} members={members} roles={roles} />}</>;
}
