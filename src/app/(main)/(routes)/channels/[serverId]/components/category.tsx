import AccordionBeta from "@/components/AccordionBeta";
import { getChannels } from "@/db/channel";
import Channel from "./channel";

interface ChannelProps {
    categoryId: string;
    name: string;
    serverId: string;
}

export default async function ServerCategory({ categoryId, name, serverId }: ChannelProps) {
    const channels = await getChannels({ categoryId });
    return (
        <>
            <AccordionBeta name={name}>
                {channels.map(({ name, id, type }) => (
                    <Channel key={id} name={name} id={id} serverId={serverId} type={type} />
                ))}
            </AccordionBeta>
        </>
    );
}
