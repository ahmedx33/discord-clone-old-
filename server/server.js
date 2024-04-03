"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
// use tsc to compile this to server.js
const io = new socket_io_1.Server({
    cors: {
        origin: "http://localhost:3001",
    },
});
io.on("connection", (socket) => {
    // sending message to custom channel in the server
    socket.on("server/message", (message, channelId) => {
        socket.join(channelId);
        io.emit("server/receive", message);
    });
    socket.on("server/message/startTyping", (channelId, userId) => {
        io.emit("server/message/startTyping", userId);
        console.log(userId);
    });
    socket.on("server/message/stopTyping", (channelId, userId) => {
        io.emit("server/message/stopTyping");
    });
});
io.listen(3000);
