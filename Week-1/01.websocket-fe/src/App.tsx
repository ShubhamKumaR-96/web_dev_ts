import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  function message() {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send("ping"); // ✅ Use "ping"
    } else {
      console.log("WebSocket is not ready. Current state:", socket?.readyState);
    }
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("✅ WebSocket connected");
      setSocket(ws);
    };

    ws.onmessage = (ev) => {
      console.log("📩 Server says:", ev.data);
    };

 

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div>
        <p>Welcome to WebSocket</p>
        <input type="text" placeholder="message" />
        <button onClick={message}>Send</button>
      </div>
    </>
  );
}

export default App;
