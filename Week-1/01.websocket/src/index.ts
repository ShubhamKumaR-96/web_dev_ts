import { WebSocketServer } from "ws";

// Start WebSocket server on port 8080
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("✅ Client connected to WebSocket");

  socket.on("message", (e) => {
    const msg = e.toString();
    console.log("📩 Received from client:", msg);

    // Respond only to 'ping'
    if (msg === "ping") {
      socket.send("Pong 🏓");
    } else {
      socket.send("❓ Unknown message: " + msg);
    }
  });

//   socket.on("close", () => {
//     console.log("🔌 Client disconnected");
//   });
});
