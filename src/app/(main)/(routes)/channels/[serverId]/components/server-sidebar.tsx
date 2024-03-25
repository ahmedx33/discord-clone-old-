import { redirect } from "next/navigation";

import Profile from "./profile";
import ServerCategory from "./category";

import { prisma } from "@/db/prisma";

import { currentUser } from "@/lib/current-user";
import ServerHeader from "./server-header";


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
                    roles: "asc"
                },
            },
        },
    });

    if (!server) return redirect("/channels/");

    const categories = server.category;
    const user = await currentUser();

    
    const member = server.members.find(member => member.id === user?.id)
    const role = member?.roles.map(role => role)

    return (
        <div className="h-screen min-w-[250px] bg-[#2B2D31] relative">
            <div className="select-none w-full">
                <ServerHeader server={server}/>
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
