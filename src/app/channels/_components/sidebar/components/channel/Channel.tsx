import GetIconProvider from "@/Providers/GetIconProvider";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 5

export default function Channel({ id, serverId, name, type }: { id: string, serverId: string, name: string, type: string }) {

    return <div className="flex flex-col justify-center ">
        <Link href={`/channels/${serverId}/${id}/`} className="text-white text-[1.1rem] flex items-center gap-x-2 my-1 cursor-pointer hover:bg-[#3F4248] p-2 rounded-md"><GetIconProvider type={type} />{name}</Link>
    </div>
}
