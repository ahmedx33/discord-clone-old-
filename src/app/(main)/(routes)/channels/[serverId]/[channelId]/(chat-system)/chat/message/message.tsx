"use client";

import Image from "next/image";

import { HiReply } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { FaFaceSmile, FaPen } from "react-icons/fa6";

import RepliedMessage from "./RepliedMessage";

import { cn } from "@/lib/utils";
import { format, isToday } from "date-fns";

import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";

import { Dispatch, SetStateAction } from "react"
import { Member, Message as MessageType, User } from "@prisma/client";


import "./index.css";

interface MessageProps {
    message: MessageType & {
        isGrouped: boolean;
    };
    isReplying: boolean;
    isLoading: any;
    messages?: MessageType[];
    users: User[];
    members: Member[];
    scrollToLastMessageById: string;
    setReplyTo?: Dispatch<SetStateAction<MessageType | undefined>>;
    setIsReplying?: Dispatch<SetStateAction<boolean>>;
}

export default function Message({ message, messages, isReplying, users, members, scrollToLastMessageById, setReplyTo, setIsReplying }: MessageProps) {
    const userData = useSelector((state: RootState) => state.user.value);
    
    const member = members.find((member) => member.id === message.memberId);
    const user = userData?.id === member?.autherId ? userData : users?.find((user) => user.id === member?.autherId);
    
    const repliedMessage = messages?.find((repliedMessage) => message.replyTo === repliedMessage.id);
    const repliedMember = member?.id === repliedMessage?.memberId ? member : members.find(member => member.id === repliedMessage?.memberId)
    
    
    const isOwner = userData?.id === message.memberId;
    const lastMessage = window.document.getElementById(scrollToLastMessageById);
    const messageDate = format(message?.createdAt, "h:mm a");

    if (lastMessage) {
        lastMessage.scrollIntoView({ block: "end", inline: "nearest" });
    }

    return (
        <div
            id={message.id}
            className={cn(
                "hover:bg-[#2E3035] w-full  relative group  flex items-center ",
                !message?.isGrouped && "my-2",
                message.replyTo && "mt-4",
                isReplying && "hovering",
                repliedMember?.autherId === userData?.id && repliedMember?.autherId !== user?.id ? "highlighted" : ""
            )}
        >
            {(!message?.isGrouped || message.replyTo) && (
                <div className="flex items-center gap-x-3">
                    <div className={"flex items-start overflow-hidden pl-5 w-[60px] h-fit hover:shadow-black cursor-pointer select-none z-10"}>
                        <Image src={user?.profileImg as string} width={40} height={40} alt="profile" className="rounded-[50%] h-[40px] bg-cover" />
                    </div>
                </div>
            )}

            <div className="flex flex-col justify-center w-[90%]">
                {message.replyTo && <RepliedMessage member={member as Member} message={repliedMessage as MessageType} users={users} members={members} />}

                <div className="px-[1rem] w-full relative pr-10">
                    {(!message?.isGrouped || message.replyTo) && (
                        <div className="flex items-center">
                            <div className="text-white hover:underline cursor-pointer w-fi relative -top-[0.2rem] ">{user?.displayName}</div>
                            <span className="text-[#949BA4] mx-2 text-[0.8rem] cursor-default">
                                {isToday(message.createdAt) ? "Today" : format(message.createdAt, "eeee")} at {messageDate}
                            </span>
                        </div>
                    )}
                </div>

                <div className={cn("text-[#DBDEE1] w-full relative  mx-4 ", message?.isGrouped && "px-[3.7rem] py-1", message.replyTo && "px-[1rem] mx-0", false ? "text-[#6C6E73]" : "")}>
                    {message.isGrouped && (
                        <span
                            className={cn(
                                "text-[#949BA4] mx-2 text-[0.7rem] absolute left-[-10px] bottom-[6px] hidden group-hover:block  cursor-default select-none ",
                                message.replyTo && "group-hover:hidden"
                            )}
                        >
                            {messageDate}
                        </span>
                    )}
                    <span> {message?.title}</span>

                    <div
                        className={cn(
                            "w-fit h-fit absolute right-0  -translate-y-1/2 bg-[#313338] border border-[#27292D] rounded-[4px] overflow-hidden hidden  items-center  group-hover:flex cursor-pointer z-50 ",
                            message.isGrouped || message.replyTo ? "top-[-6px]" : "top-[-30px]",

                            message.replyTo ? "top-[-60px]" : ""
                        )}
                    >
                        <FaFaceSmile color="#D8DBDE" className="hover:bg-[#393C41] p-1" size={30} />
                        {isOwner && <FaPen color="#D8DBDE" className="hover:bg-[#393C41] p-1" size={30} />}
                        <HiReply
                            color="#D8DBDE"
                            className="hover:bg-[#393C41] p-1"
                            size={30}
                            onClick={() => {
                                setIsReplying!(true);
                                setReplyTo!(message);
                            }}
                        />
                        <BsThreeDots color="#D8DBDE" className="hover:bg-[#393C41] p-1" size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
}
