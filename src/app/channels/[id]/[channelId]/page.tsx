import { getMessages } from "@/db/db";
import MessageField from "./components/MessagesField";
import { Suspense } from "react";
import Message from "./components/Message";

export default async function Page({ params: { channelId } }: { params: { channelId: string } }) {
    const messages = await getMessages({ channelId: channelId })

    return (
        <div className="flex flex-col">
            {
                messages.map(message => <Message key={message.id} message={message} />)
            }
            <Suspense fallback="loading...">
                <MessageField channelId={channelId} />
            </Suspense>
        </div>
    )
}
