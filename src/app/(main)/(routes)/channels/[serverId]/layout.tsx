import React, { ReactNode } from "react";
import ServerSidebar from "./components/server-sidebar";

export default function layout({ children, params: { serverId } }: { children: ReactNode; params: { serverId: string } }) {
    return (
        <div className="flex w-full overflow-hidden">
            <ServerSidebar serverId={serverId} />
            {children}
            <div id="sidebar"></div>
        </div>
    );
}
