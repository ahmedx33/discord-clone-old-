import Image from "next/image";
import Link from "next/link";

export default function Channel({ id, serverId, name, type }: { id: string, serverId: string, name: string, type: string }) {
    const getIcon = (type: string): React.ReactNode => {
        const iconMap: Record<string, React.ReactNode> = {
            TEXT: <Image src="/svgs/text.svg" width={20} height={20} alt="text" draggable={false} />,
            AUDIO: <Image src="/svgs/voice.svg" width={20} height={20} alt="voice" draggable={false} />,
        };

        return iconMap[type];
    };

    return <div className="flex flex-col justify-center ">
        <Link href={`/channels/${serverId}/${id}/`} className="text-white text-[1.1rem] flex items-center gap-x-2 my-1 cursor-pointer hover:bg-[#3F4248] p-2 rounded-md">{getIcon(type)}{name}</Link>
    </div>
}
