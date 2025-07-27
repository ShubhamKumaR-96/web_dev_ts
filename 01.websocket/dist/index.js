"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("welcome to web socket");
    setInterval(() => {
        socket.send("Current price of solana: " + Math.random() * 100);
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
