import Chat from "./components/chatSystem/Chat";
import Header from "./components/ui/components/header/Header";
import { getUser, getUsers } from "@/db/user";
import { getMessages } from "@/db/message";
import { getChannel } from "@/db/channel";
import { revalidatePath } from "next/cache";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getMembers } from "@/db/member";
import { getRules } from "@/db/server";

export default async function MainServerPage({ params: { id, channelId } }: { params: { id: string, channelId: string } }) {
    const supabase = createServerComponentClient({ cookies: cookies });
    const { user } = (await supabase.auth.getUser()).data;
    const currentUser = await getUser({ userId: user?.id as string });
    const users = await getUsers()
    const dbMessages = await getMessages({ channelId });
    const channel = await getChannel({ channelId });
    const members = await getMembers({ serverId: id })
    const rules = await getRules({ serverId: id })

    revalidatePath(`/channels/${id}/${channelId}`)

    return (
        <div className="flex flex-col w-full">
            <Header channel={channel} members={members} users={users} rules={rules}/>
            <Chat user={currentUser} channelId={channelId} dbMessages={dbMessages} channel={channel} users={users} />
        </div>
    );
}
