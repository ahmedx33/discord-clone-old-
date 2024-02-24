import { ioHandler } from "@/lib/io";
import { use, useEffect, useState } from "react";


export function useChat() {
    const [socket, setSocket] = useState<any>(null)
    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        const socketInstance = ioHandler()
        setSocket(socketInstance)

        return () => {
            socketInstance.disconnect()
        }
    }, [])

    socket?.on("receive", (message: string) => {
        setMessages([...messages, message]);
    });

    return messages
}

