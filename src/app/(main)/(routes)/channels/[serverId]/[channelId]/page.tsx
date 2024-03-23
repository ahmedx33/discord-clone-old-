import Chat from "./components/chatSystem/Chat";
import Header from "./components/ui/components/header/Header";

import { revalidatePath } from "next/cache";

import { getUsers } from "@/db/user";
import { prisma } from "@/db/prisma";
import { ChannelWithMessages } from "@/types/types";
import { Channel, Member, Message, Rule } from "@prisma/client";

export default async function MainServerPage({ params: { serverId, channelId } }: { params: { serverId: string; channelId: string } }) {
    const server = await prisma.server.findUnique({
        where: {
            id: serverId,
        },

        include: {
            category: {
                include: {
                    channels: {
                        include: {
                            messages: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: "asc",
                },
            },
            members: true,
            rules: true,
        },
    });

    const users = await getUsers();
    const channel = server?.category.map((category) => category.channels[0]).find((channel) => channel.id === channelId);

    const members = server?.members;
    const roles = server?.rules;
    const messages = channel?.messages

    revalidatePath(`/channels/${serverId}/${channelId}`);

    return (
        <div className="flex flex-col w-full">
            <Header channel={channel as Channel} members={members as Member[]} users={users} rules={roles as Rule[]} />
            <Chat channelId={channelId} dbMessages={messages as Message[]} channel={channel as Channel} users={users} />
        </div>
    );
}