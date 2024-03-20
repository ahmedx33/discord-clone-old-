import Profile from "./components/profile/Profile";
import ServerData from "./components/server/ServerData";
import { getServer } from "@/db/server";

export default async function SideBarInfo({ serverId }: { serverId?: string }) {
    const server = await getServer({ serverId: serverId as string });

    return (
        <div className="h-screen min-w-[250px] bg-[#2B2D31] relative">
            <ServerData serverId={serverId as string} title={server?.name as string} />
            <div className="absolute left-0 bottom-0 w-full">
                <Profile />
            </div>
        </div>
    );
}
