import { FaHashtag } from "react-icons/fa6";
    export const getIcon = (type: string): React.ReactNode => {
        const iconMap: Record<string, React.ReactNode> = {
            TEXT: <FaHashtag />,
            VIDEO: <Image src="/svgs/video.svg" width={20} height={20} alt="video" draggable={false} />,
            AUDIO: <Image src="/svgs/voice.svg" width={20} height={20} alt="voice" draggable={false} />,
        };

        return iconMap[type];
    };
