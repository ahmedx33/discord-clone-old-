import Chat from "./components/chatSystem/chat";
import Header from "./components/ui/components/header/header";

import { revalidatePath } from "next/cache";

import { getUsers } from "@/db/user";
import { prisma } from "@/db/prisma";
import { ChannelWithMessages } from "@/types/types";
import { Channel, Member, Message, Role } from "@prisma/client";
import { getServer } from "@/db/server";

export default async function MainServerPage({ params: { serverId, channelId } }: { params: { serverId: string; channelId: string } }) {
    const server = await getServer({ serverId });

    const users = await getUsers();

    const channel = server?.category.map((category) => category.channels[0]).find((channel) => channel.id === channelId);

    const members = server?.members;
    const roles = server?.roles;
    const messages = channel?.messages;

    revalidatePath(`/channels/${serverId}/${channelId}`);

    return (
        <div className="flex flex-col w-full">
            <Header channel={channel as Channel} members={members as Member[]} users={users} roles={roles as Role[]} />
            <Chat channelId={channelId} dbMessages={messages as Message[]} channel={channel as Channel} users={users} members={members as Member[]}/>
        </div>
    );
}