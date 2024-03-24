import GetIconProvider from "@/providers/GetIconProvider";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 1000;

interface ChannelProps {
    id: string;
    serverId: string;
    name: string;
    type: string;
}

export default function Channel({ id, serverId, name, type }: ChannelProps) {
    return (
        <div className="flex flex-col justify-center ">
            <Link href={`/channels/${serverId}/${id}/`} className={`text-[#80848E] text-[1.1rem] flex items-center gap-x-2 my-1 cursor-pointer hover:bg-[#3F4248] p-2 rounded-[5px]`}>
                <GetIconProvider type={type} size={20} />
                {name}
            </Link>
        </div>
    );
}
