import { getServers } from "@/db/server";
import Servers from "./servers";
import { currentUser } from "@/lib/current-user";

export default async function ServersList() {
    const user = await currentUser();
    const servers = await getServers({ autherId: user?.id as string});

    return (
        <div className="flex flex-col gap-2 bg-[#1E1F22] w-fit h-screen p-2">
            <Servers servers={servers} />
        </div>
    );
}
