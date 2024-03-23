import { redirect } from "next/navigation";
import Profile from "./Profile";
import ServerCategory from "./category";
import { ServerWithChildren } from "@/types/types";
import { prisma } from "@/db/prisma";

export default async function ServerSidebar({ serverId }: { serverId: string }) {
    const server = await prisma.server.findUnique({
        where: {
            id: serverId,
        },
        include: {
            category: {
                include: {
                    channels: true,
                },
                orderBy: {
                    createdAt: "asc",
                },
            },

            members: {
                include: {
                    auther: true,
                },
                orderBy: {
                    rules: "asc",
                },
            },
        },
    });

    console.log(
        server?.category.map((category) => {
            return category.channels;
        })
    );

    if (!server) redirect("/channels/");

    const categories = server.category;

    return (
        <div className="h-screen min-w-[250px] bg-[#2B2D31] relative">
            <div className="select-none">
                <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center px-4 cursor-pointer transition duration-200 hover:bg-[#35373C] select-none">
                    <h1 className="text-white text-[1.1rem] font-bold">{server.name}</h1>
                </div>
                <div className="px-3">
                    {categories?.map((category) => (
                        <ServerCategory key={category.id} categoryId={category.id} serverId={category.serverId} name={category.title} />
                    ))}
                </div>
            </div>
            <div className="absolute left-0 bottom-0 w-full">
                <Profile />
            </div>
        </div>
    );
}
