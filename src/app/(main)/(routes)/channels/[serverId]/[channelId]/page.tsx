import { revalidatePath } from "next/cache";

import { getUsers } from "@/db/user";
import { getServer } from "@/db/server";

import { Channel, Member, Message, Role } from "@prisma/client";

import Header from "./(chat)/ui/header/header";
import Chat from "./(chat)/chat/chat";

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