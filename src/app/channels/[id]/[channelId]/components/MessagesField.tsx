"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { ioHandler } from "@/lib/io";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import MessagesProvider from "./MessagesProvider";
import Message from "./Message";

export default function MessageField({ channelId }: { channelId: string }) {
    const [send, setSend] = useState("");
    const [socket, setSocket] = useState<any>(null)
    const [messages, setMessages] = useState<MessageInterFace[]>([]);

    const handleMessage = async () => {
        const supabase = createClientComponentClient()
        const { user } = (await supabase.auth.getUser()).data

        const data = {
            memberId: user?.id as string,
            channelId: channelId,
            title: send,
        }

        socket?.emit("message", data);
        await fetch("/auth/message/api/", { method: "POST", body: JSON.stringify(data) })
    };

    useEffect(() => {
        const socketInit = ioHandler();
        setSocket(socketInit)

        return () => {
            socketInit.disconnect();
        }
    }, [])

    socket?.on("receive", (message: MessageInterFace) => {
        setMessages([...messages, message]);
    });

    return (
        <div className="w-full">
            <div>
                <Suspense fallback="sending...">
                    <MessagesProvider>
                        {messages.map(message => <Message key={message.id} {...message} />)}
                    </MessagesProvider>
                </Suspense>
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
