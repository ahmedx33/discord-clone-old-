import { getMessages, getUser } from "@/db/db";
import MessageField from "./components/MessagesField";
import { Suspense } from "react";
import Message from "./components/Message";
import MessagesProvider from "./components/MessagesProvider";

export default async function Page({ params: { channelId } }: { params: { channelId: string } }) {
    const messages = await getMessages({ channelId: channelId })

    return (
        <div className="flex flex-col">
            {
                messages.map(message => <Message key={message.id} {...message} />)
            }
            <Suspense fallback="loading...">
                <MessageField channelId={channelId} />
            </Suspense>
        </div>
    )
}
