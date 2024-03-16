import GetIconProvider from "@/Providers/GetIconProvider";

export default async function Header({ channel }: { channel: ChannelInterFace | null }) {
    return <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center px-4 fixed top-0 z-50 bg-[#313338] text-white font-bold gap-2"><GetIconProvider type={channel?.type as string} size={25}/> {channel?.name}</div>;
}
