import AccordionBeta from "@/components/AccordionBeta";
import { getChannels } from "@/db/channel";
import Channel from "./Channel";

export default async function ServerCategory({ categoryId, name, serverId }: { categoryId: string; name: string; serverId: string }) {
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
