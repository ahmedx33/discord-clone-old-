import { ReactNode } from "react";
import { ChannelsList } from "./_components/nav/ChannelsList";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            <ChannelsList />
            {children}
        </div>
    )
}
