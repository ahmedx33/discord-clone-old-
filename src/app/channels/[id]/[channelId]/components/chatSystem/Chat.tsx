"use client";

import { FormEvent, Suspense, useEffect, useRef, useState } from "react";
import { ioHandler } from "@/lib/io";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Message from "../message/Message";
import MessagesGroup from "../message/components/MessagesGroup";
import { FaCirclePlus } from "react-icons/fa6";
import { differenceInMinutes } from "date-fns"


export default function Chat({ channelId, users, dbMessages, channel }: { channelId: string; users: any; dbMessages: MessageInterFace[]; channel: ChannelInterFace | null }) {
    const [value, setValue] = useState("");
    const [socket, setSocket] = useState<any>(null);
    const [messages, setMessages] = useState<MessageInterFace[]>(dbMessages);

    const groupedMessages = messages.map((message, idx) => {
        const secondMessage = messages[idx + 1]

        if (idx === messages.length) return

        if (idx === 0) {
            return {
                ...message,
                isGrouped: true
            }
        } else {
            return {
                ...message,
                isGrouped: secondMessage?.memberId !== message?.memberId && differenceInMinutes(secondMessage?.createdAt, message.createdAt) < 3
            }
        }
    })


    console.log(groupedMessages)

    const handleMessage = async (e: FormEvent) => {
        e.preventDefault();
        const supabase = createClientComponentClient();
        const { user } = (await supabase.auth.getUser()).data;

        const data = {
            memberId: user?.id as string,
            channelId: channelId,
            title: value,
        };
        socket?.emit("message", data);
        setValue("");
        await fetch("/auth/message/api/", { method: "POST", body: JSON.stringify(data) });
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

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <MessagesGroup>
                {groupedMessages.map((message) => (
                    <Message key={message?.id} message={message} userData={users} />
                ))}
            </MessagesGroup>
            <div className="px-5 w-[95%] relative bg-[#2B2D31]">
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
