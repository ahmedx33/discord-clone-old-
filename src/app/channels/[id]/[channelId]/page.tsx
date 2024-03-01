import { getChannel, getMessages, getUsers } from "@/db/db";
import { Suspense } from "react";
import Message from "./components/Message";
import Chat from "./components/Chat";
import Header from "./components/Header";

export default async function Page({ params: { channelId } }: { params: { channelId: string } }) {
    const users = await getUsers()
    const dbMessages = await getMessages({ channelId })
    const channel = await getChannel({ channelId })

    return (
        <div className="flex flex-col w-full">
            <Header channel={channel} />
            <Chat users={users} channelId={channelId} dbMessages={dbMessages} channel={channel} />
        </div>
    )
}
