const { Server } = require("socket.io");

const io = new Server({
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
        console.log(userId)
    });

    socket.on("server/message/stopTyping", (channelId, userId) => {
        io.emit("server/message/stopTyping");
    });

});

io.listen(3000);
