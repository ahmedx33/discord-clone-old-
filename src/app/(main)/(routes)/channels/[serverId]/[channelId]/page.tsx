import Chat from "./components/chatSystem/Chat";
import Header from "./components/ui/components/header/Header";
import { getUsers } from "@/db/user";
import { getMessages } from "@/db/message";
import { getChannel } from "@/db/channel";
import { revalidatePath } from "next/cache";
import { getMembers } from "@/db/member";
import { getRules } from "@/db/server";

export default async function MainServerPage({ params: { serverId, channelId } }: { params: { serverId: string, channelId: string } }) {

    const [users, dbMessages, channel, members, rules] = await Promise.all([
        getUsers(),
        getMessages({ channelId }),
        getChannel({ channelId }),
        getMembers({ serverId }),
        getRules({ serverId })
    ]);

    revalidatePath(`/channels/${serverId}/${channelId}`)

    return (
        <div className="flex flex-col w-full">
            <Header channel={channel} members={members} users={users} rules={rules} />
            <Chat channelId={channelId} dbMessages={dbMessages} channel={channel} users={users} />
        </div>
    );
}
