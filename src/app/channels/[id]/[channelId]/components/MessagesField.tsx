
"use client";

import MessageInput from "@/components/MessageInput";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ioHandler } from "@/lib/io";
import { getUserId } from "@/lib/userId";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getMessages } from "@/db/db";

export default function MessageField({ channelId }: { channelId: string }) {
    const [send, setSend] = useState("");
    const [socket, setSocket] = useState<any>(null)
    const [messages, setMessages] = useState<string[]>([]);
    const supabase = createClientComponentClient()

    const handleMessage = async () => {
        socket?.emit("message", send);
        const { user } = (await supabase.auth.getUser()).data

        const data = {
            memberId: user?.id as string,
            channelId: channelId,
            title: send,
        }


        await fetch("/auth/message/api/", { method: "POST", body: JSON.stringify(data) })
    };

    useEffect(() => {
        const socketInit = ioHandler();
        setSocket(socketInit)

        return () => {
            socketInit.disconnect();
        }
    }, [])

    socket?.on("receive", (message: string) => {
        setMessages([...messages, message]);
    });

    return (
        <div className="w-full">
            <div>
                {
                    messages.map((message) => (
                        <div className="text-white" key={message}>{message}</div>
                    ))
                }

            </div>
            <input
                onChange={(e) => {
                    setSend(e.target.value);
                }}
                name="message"
                type="text"
                className="w-[500px] h-[30px] bg-[#383A40] placeholder:text-white outline-none caret-white p-3 rounded-md text-white"
                placeholder={`Message`}
            />
            <button onClick={handleMessage}>send</button>
        </div>
    );
}
