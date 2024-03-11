"use client";

import { FormEvent, Suspense, unstable_useCacheRefresh, useEffect, useRef, useState } from "react";
import { ioHandler } from "@/lib/io";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Message from "../message/components/message/Message";
import MessagesGroup from "../message/components/MessagesGroup";
import { FaCirclePlus } from "react-icons/fa6";
import { differenceInMinutes } from "date-fns";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios"

export default function Chat({ channelId, user, dbMessages, channel, users }: { channelId: string; user: UserInterFace; dbMessages: MessageInterFace[]; channel: ChannelInterFace | null, users: UserInterFace[] }) {
    const [value, setValue] = useState("");
    const [socket, setSocket] = useState<any>(null);
    const [messages, setMessages] = useState<MessageInterFace[]>(dbMessages);
    const [replyTo, setReplyTo] = useState<MessageInterFace | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isReplying, setIsReplying] = useState<boolean>(false);

    const repliedUser: UserInterFace | undefined = user?.id === replyTo?.memberId ? user : users?.find((user) => user.id === replyTo?.memberId)

    const groupedMessages = messages.map((message, idx) => {
        const oldMessage = messages[idx - 1];
        const isOwner = oldMessage?.memberId === message.memberId;
        const diff = isOwner && differenceInMinutes(oldMessage.createdAt, message.createdAt) < 5;

        return {
           ...message,
            isGrouped: diff,
            isOwner,
        };
    });

    const handleMessage = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (value === "") return;

        const data = {
            id: crypto.randomUUID(),
            memberId: user?.id as string,
            channelId: channelId,
            title: value,
            replyTo: replyTo?.id,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        setValue("");
        socket?.emit("message", data);
        setIsReplying(false);
        setReplyTo(undefined);
        await axios.post("/auth/message/api/",  data);
        setIsLoading(false);
    };

    useEffect(() => {
        const socketInit = ioHandler();
        setSocket(socketInit);

        return () => {
            socketInit.disconnect();
        };
    }, []);

    socket?.on("receive", (message: MessageInterFace) => {
        setMessages([...messages, message]);
    });
    console.log(user)
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <MessagesGroup>
                {groupedMessages.map((message) => (
                    <Message key={message?.id} message={message} userData={user} setReplyTo={setReplyTo} setIsReplying={setIsReplying} messages={messages} isHovering={message.id === replyTo?.id} users={users} />
                ))}
            </MessagesGroup>
            <div className="px-5 w-[95%] relative bg-[#2B2D31]">
                {isReplying && (
                    <div className="bg-[#2B2D31] w-full h-[40px] z-50 absolute top-[-104px] rounded-t-[8px] px-4 flex items-center">
                        <span className="text-[#B5BAC1] text-[14px]">
                            Replying to <span className="font-bold cursor-pointer" onClick={() => {
                                const element = document.getElementById(replyTo?.id as string)
                                element?.scrollIntoView({ behavior: "smooth", block: "center" });
                            }}>{repliedUser?.userName}</span>
                        </span>
                        <IoIosCloseCircle
                            size={18}
                            className="text-[#B5BAC1] cursor-pointer ml-auto hover:text-[#DBDEE1]"
                            onClick={() => {
                                setIsReplying(false);
                                setReplyTo(undefined);
                            }}
                        />
                    </div>
                )}
                <form onSubmit={handleMessage}>
                    <FaCirclePlus className="absolute bottom-[44px] left-[25px] translate-x-1/2 translate-y-1/2 z-50 text-[1.5rem] text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1]" />
                    <input
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        value={value}
                        name="message"
                        type="text"
                        className="w-full h-[30px] mb-[20px] bg-[#383A40] placeholder:text-[#949BA4] outline-none caret-white px-4 pl-[3.25rem] py-6 text-white absolute bottom-0 "
                        style={{ borderRadius: "7px" }}
                        placeholder={`Message #${channel?.name}`}
                    />
                </form>
            </div>
        </div>
    );
}
