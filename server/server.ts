import { Server } from "socket.io";

// use tsc to compile this to server.js

const io = new Server({
    cors: {
        origin: "http://localhost:3001",
    },
});


io.on("connection", (socket: { on: (arg0: string, arg1: { (message: any, channelId: any): void; (channelId: any, userId: any): void; (channelId: any, userId: any): void; }) => void; join: (arg0: any) => void; }) => {
    // sending message to custom channel in the server

    socket.on("server/message", (message, channelId) => {
        socket.join(channelId);
        io.emit("server/receive", message);
    });


    socket.on("server/message/startTyping", (channelId, userId) => {
        io.emit("server/message/startTyping", userId);
        console.log(userId)
    });

    socket.on("server/message/stopTyping", (channelId, userId) => {
        io.emit("server/message/stopTyping");
    });

});

io.listen(3000);
