import { redirect } from "next/navigation";

export default function page({ params: { id, channelId } }: { params: { id: string, channelId: string } }) {

    redirect(`/channels/${id}/${channelId}`)
    return (
        <></>
    )
}

