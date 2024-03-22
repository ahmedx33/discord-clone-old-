import AccordionBeta from "@/components/AccordionBeta";
import Channel from "../channel/Channel";
import { getChannels } from "@/db/channel";
import { getCategorys } from "@/db/category";
import Category from "../category/Category";

export default async function ServerData({ title, serverId }: { title: string; serverId: string }) {
    const categories = await getCategorys({ serverId })
    return (
        <div className="select-none">
            <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center px-4 cursor-pointer transition duration-200 hover:bg-[#35373C] select-none">
                <h1 className="text-white text-[1.1rem] font-bold">{title}</h1>
            </div>
            <div className="px-3">
                {categories.map(({ title, id, serverId }) => <Category key={id} name={title} categoryId={id} serverId={serverId} />)}
            </div>

        </div>
    );
}
