import { redirect } from "next/navigation";
import ServerSidebar from "./components/server-sidebar";
import { prisma } from "@/db/prisma";
import { ServerWithChildren } from "@/types/types";
import { getServer } from "@/db/server";

export default async function page({ params: { serverId } }: { params: { serverId: string } }) {
    const server = await getServer({ serverId });

    const channelId = server?.category[0].channels[0].id;

    if (!server) return redirect("/channels/");

    return redirect(`/channels/${serverId}/${channelId}`);
}
