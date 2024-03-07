import Profile from "./components/profile/Profile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ServerData from "./components/server/ServerData";
import { getServers } from "@/db/server";

export default async function SideBarInfo({ serverId }: { serverId?: string }) {
    const supabase = createServerComponentClient({ cookies: cookies });
    const { user } = (await supabase.auth.getUser()).data;
    const server = (await getServers({ authorId: user?.id as string })).find((server) => server.id === serverId);
    return (
        <div className="h-screen w-[300px] bg-[#2B2D31] relative">
            <ServerData serverId={serverId as string} title={server?.name as string} />
            <div className="absolute left-0 bottom-0 w-full">
                <Profile />
            </div>
        </div>
    );
}