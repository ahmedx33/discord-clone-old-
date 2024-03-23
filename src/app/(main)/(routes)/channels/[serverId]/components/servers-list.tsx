import { getServers } from "@/db/server";
import Servers from "./servers";

export default async function ServersList() {
    const servers = await getServers();

    return (
        <div className="flex flex-col gap-2 bg-[#1E1F22] w-fit h-screen p-2">
            <Servers servers={servers} />
        </div>
    );
}
