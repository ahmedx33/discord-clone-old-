"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Message({ message, userData }: { message: MessageInterFace, userData?: UserInterFace[] }) {
    const getUser = userData && userData.find(user => user.id === message?.memberId)
    return (
        <div className={cn(`hover:bg-[#2E3035] ${!message?.isGrouped && "my-2"} flex items-center`)}>
            {!message?.isGrouped && <div className="flex items-center gap-x-3">
                <div className={"flex items-start overflow-hidden pl-5 w-fit h-fit hover:shadow-black cursor-pointer"}>
                    <Image src={getUser?.imgUrl as string} width={40} height={40} alt="profile" className="rounded-[50%] h-[40px] bg-cover" />
                </div>

            </div>}
            <div className="px-[1rem] ">
                {!message?.isGrouped && <div className="text-white hover:underline cursor-pointer w-fi relative -top-[0.2rem] ">{getUser?.userName}</div>}
                <div className={cn(`text-[#DBDEE1] ${message?.isGrouped && "px-[3.7rem] py-1"}`)}>{message?.title}</div>
            </div>
        </div>
    )
}
