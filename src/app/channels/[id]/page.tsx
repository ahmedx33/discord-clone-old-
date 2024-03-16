import { redirect } from "next/navigation";
import MainServerPage from "./[channelId]/page";

export default function page({ params: { id, channelId } }: { params: { id: string, channelId: string } }) {

    redirect(`/channels/${id}/${channelId}`)
    return (
        <></>
    )
}

