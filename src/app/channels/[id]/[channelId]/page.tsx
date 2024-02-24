"use client";

import MessageInput from "@/components/MessageInput";
import InfoNav from "../../_components/sidebar/SideBarInfo";

import { io } from "socket.io-client";
import { FormEvent, useEffect, useRef, useState } from "react";
import MessagesField from "./components/MessagesField";
import { ioHandler } from "@/lib/io";

export default function Page() {
    const [send, setSend] = useState("");
    const [socket, setSocket] = useState<any>(null)
    const [messages, setMessages] = useState<string[]>([]);

    const handleMessage = (e: FormEvent) => {
        e.preventDefault();
        console.log(send)
        socket?.emit("message", send);
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
                        <div key={message}>{message}</div>
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
