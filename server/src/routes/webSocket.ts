import { Server, Socket } from "socket.io";
import { Request, Response } from "express";
import { ChatModel } from "../models/chats";

const webSocketRoutes = (io: Server, socket: Socket) => {
  socket.on("join_room", (data: any) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data: any) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("chat_message", async (data: any) => {
    console.log(`Received chat message: ${data.message} in room ${data.room}`);

    await ChatModel.create({
      project: data.project,
      user: data.user,
      content: data.content,
    });

    io.to(data.room).emit("chat_message", data);
  });
};

export default webSocketRoutes;
