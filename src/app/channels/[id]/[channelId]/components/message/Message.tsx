"use client"

import { cn } from "@/lib/utils"
import { format, isToday } from "date-fns"
import Image from "next/image"
import { HiReply } from "react-icons/hi";

export default function Message({ message, userData, isLoading }: {
    message: MessageInterFace & {
        isGrouped: boolean,
        isLoading?: boolean
    }, userData?: UserInterFace[], isLoading?: boolean
}) {
    const getUser = userData && userData.find(user => user.id === message?.memberId)
    const isOwner = getUser?.id === message?.memberId
    const messageDate = format(message?.createdAt, "hh:mm a")

    return (
        <div className={cn(`hover:bg-[#2E3035] group ${!message?.isGrouped && "my-2"} flex items-center`)}>
            {!message?.isGrouped && <div className="flex items-center gap-x-3">
                <div className={"flex items-start overflow-hidden pl-5 w-fit h-fit hover:shadow-black cursor-pointer select-none"}>
                    <Image src={getUser?.imgUrl as string} width={40} height={40} alt="profile" className="rounded-[50%] h-[40px] bg-cover" />
                </div>
            </div>}
            <div className="px-[1rem] ">
                {!message?.isGrouped && <div className="flex items-center">
                    <div className="text-white hover:underline cursor-pointer w-fi relative -top-[0.2rem] ">{getUser?.userName}</div>
                    <span className="text-[#949BA4] mx-2 text-[0.8rem] cursor-default">{isToday(message.createdAt) ? "Today" : format(message.createdAt, "eeee")} at {messageDate}</span>
                </div>}
                <div className={cn(`text-[#DBDEE1]  relative ${message?.isGrouped && "px-[3.7rem] py-1"} ${message.isLoading && "text-[#6C6E73]"}`)}>{message.isGrouped && <span className="text-[#949BA4] mx-2 text-[0.7rem] absolute left-[-10px] bottom-[6px] hidden group-hover:block  cursor-default select-none">{messageDate}</span>}{message?.title}</div>
            </div>
        </div>
    )
}
