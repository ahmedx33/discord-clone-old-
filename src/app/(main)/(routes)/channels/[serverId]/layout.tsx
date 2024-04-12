
import React, { ReactNode } from "react";
import ServerSidebar from "./components/server-sidebar";
import MemberListProvider from "@/components/providers/member-list-provider";

export default function layout({ children, params: { serverId } }: { children: ReactNode; params: { serverId: string } }) {
    return (
        <div className="flex w-full overflow-hidden">
            <ServerSidebar serverId={serverId} />
            {children}
            <div id="sidebar">
                <MemberListProvider />
            </div>
        </div>
    );
}
