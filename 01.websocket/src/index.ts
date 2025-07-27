
import { WebSocketServer } from "ws";

const wss=new WebSocketServer({port:8080})

wss.on("connection",function(socket){
    console.log("welcome to web socket")
    setInterval(()=>{
        socket.send("Current price of solana: " + Math.random()*100)
    },500)

    socket.on("message",(e)=>{
     console.log(e.toString())
    })
})