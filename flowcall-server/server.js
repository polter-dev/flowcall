import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

const rooms = {};
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);


    
    socket.on ("create-room", () => {
        const code = Math.random().toString(36).substring(2,8)
        rooms[code] = [socket.id];
        socket.join(code);
        socket.emit("room-created", code);
    });

    socket.on("join-room", (code) => {
        if(rooms[code]){
            rooms[code].push(socket.id);
            socket.join(code);
            io.to(code).emit("user-joined", socket.id);
        } else {
            socket.emit("error", "Room does not exist");
        }
    });

    socket.on("signal", ({ to, data }) => {
        console.log(`Signal from ${socket.id} -> ${to}`);
        io.to(to).emit("signal", { from: socket.id, data });
    });

    socket.on("ice-candidate", ({ to, candidate }) => {
        console.log(`ICE from ${socket.id} -> ${to}`);
        io.to(to).emit("ice-candidate", { from: socket.id, candidate });
    });

    socket.on("chat", ({ room, message }) => {
        io.to(room).emit("chat", { sender: socket.id, message });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        for (const code in rooms){
            rooms[code] = rooms[code].filter((id) => id !== socket.id);
            if(rooms[code].length === 0) delete rooms[code];
        }
    });
});

app.get("/", (req, res) => {
    res.send("Flowcall Room Server is running");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});