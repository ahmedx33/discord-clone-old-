import { io } from "socket.io-client";


export const ioHandler = () => {
    const socketInit = io("http://localhost:3000");

    return socketInit
}
