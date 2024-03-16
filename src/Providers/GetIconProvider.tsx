import { HiSpeakerWave } from "react-icons/hi2";
import { FiHash } from "react-icons/fi";
export default function GetIconProvider({ type, size }: { type: string, size: number}) {
    const getIcon = (type: string): React.ReactNode => {
        const iconMap: Record<string, React.ReactNode> = {
            TEXT: <FiHash className="text-[#80848E]" size={size} />,
            AUDIO: <HiSpeakerWave size={size} />,
        };

        return iconMap[type];
    };
    return getIcon(type);
}
