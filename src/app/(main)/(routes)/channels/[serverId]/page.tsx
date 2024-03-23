import { redirect } from "next/navigation";
import ServerSidebar from "./components/server-sidebar";
import { prisma } from "@/db/prisma";
import { ServerWithChildren } from "@/types/types";

export default async function page({ params: { serverId } }: { params: { serverId: string } }) {
    const server = await prisma.server.findUnique({
        where: {
            id: serverId,
        },
        include: {
            category: {
                include: {
                    channels: true,
                },
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });

    console.log(
        server?.category.map((category) => {
            return category.channels;
        })
    );

    const channelId = server?.category[0].channels[0].id;

    if (!server) return redirect("/channels/");

    return redirect(`/channels/${serverId}/${channelId}`);
}
