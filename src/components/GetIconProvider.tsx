import { HiSpeakerWave } from "react-icons/hi2";
import { FiHash } from "react-icons/fi";
export default function GetIconProvider({ type }: { type: string }) {
    const getIcon = (type: string): React.ReactNode => {
        const iconMap: Record<string, React.ReactNode> = {
            TEXT: <FiHash className="text-[#80848E]" size={20} />,
            AUDIO: <HiSpeakerWave size={20} />,
        };

        return iconMap[type];
    };
    return getIcon(type);
}
