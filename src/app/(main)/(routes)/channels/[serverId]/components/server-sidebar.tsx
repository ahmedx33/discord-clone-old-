import { redirect } from "next/navigation";
import Profile from "./profile";
import ServerCategory from "./category";
import { prisma } from "@/db/prisma";

import { IoIosArrowDown } from "react-icons/io";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { currentUser } from "@/lib/current-user";

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
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-full focus:outline-none flex justify-between" asChild>
                        <div className="w-full h-[50px] border-b border-[#1F2124] flex items-center px-4 cursor-pointer transition duration-200 hover:bg-[#35373C] select-none">
                            <h1 className="text-white text-[1.1rem] font-bold">{server.name}</h1>
                            <IoIosArrowDown size={20} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="cursor-pointer">
                            <div className="text-[#777fd3] px-3 flex items-center justify-between w-52 ">
                                <p className="text-[1.1rem]">Invite People</p> <FaUserPlus size={25} />
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            <div className="text-red-500 px-3 flex items-center justify-between w-52 ">
                                <p className="text-[1.1rem]">Leave Server</p> <TbSquareRoundedArrowRightFilled size={25} />
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
