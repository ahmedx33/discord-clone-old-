import { getChannel } from "@/db/db"

export default async function Header({ channel }: { channel: ChannelInterFace | null }) {
    return (
        <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center px-4 fixed top-0 z-50 bg-[#313338] text-white font-bold">{channel?.name}</div>

    )
}
