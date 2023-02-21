import { Server, Socket } from "socket.io";
import webSocketRoutes from "./routes/webSocket";

export const handleSocketConnection = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`User Connected: ${socket.id}`);

    webSocketRoutes(io, socket);

    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
};
