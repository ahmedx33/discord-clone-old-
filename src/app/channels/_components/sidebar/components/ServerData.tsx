import AccordionBeta from "@/components/AccordionBeta";
import { getChannels } from "@/db/db";
import Channel from "./Channel";




export default async function ServerData({ title, serverId }: { title: string, serverId: string }) {
    const chanels = await getChannels({ serverId })

    return (
        <div className="select-none">
            <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center px-4 cursor-pointer transition duration-200 hover:bg-[#35373C] select-none">
                <h1 className="text-white text-[1.1rem] font-bold">{title}</h1>
            </div>
            <div className="px-3">
                <AccordionBeta>
                    {chanels.map((channel) => <Channel key={channel.id} id={channel.id} serverId={serverId} name={channel.name} type={channel.type} />)}
                </AccordionBeta>
            </div>
        </div>
    )
}




