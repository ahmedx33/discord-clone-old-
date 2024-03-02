import Chat from "./components/chatSystem/Chat";
import Header from "./components/ui/components/header/Header";
import { getUsers } from "@/db/user";
import { getMessages } from "@/db/message";
import { getChannel } from "@/db/channel";
import { revalidatePath } from "next/cache";

export default async function Page({ params: { id, channelId } }: { params: { id: string, channelId: string } }) {
    const users = await getUsers();
    const dbMessages = await getMessages({ channelId });
    const channel = await getChannel({ channelId });

    revalidatePath(`/channels/${id}/${channelId}`)

    return (
        <div className="flex flex-col w-full">
            <Header channel={channel} />
            <Chat users={users} channelId={channelId} dbMessages={dbMessages} channel={channel} />
        </div>
    );
}
