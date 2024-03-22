import { redirect } from "next/navigation";

export default function page({ params: { serverId, channelId } }: { params: { serverId: string; channelId: string } }) {
    redirect(`/channels/${serverId}/${channelId}`);
    return null;
}
