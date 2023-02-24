import { Server as HttpServer } from "http";
import { Socket, Server } from "socket.io";
import { ChatModel } from "./models/chats";
import { UserModel } from "./models/users";
import Service from "./services/service";

export class ServerSocket {
  public static instance: ServerSocket;
  public io: Server;
  public chat;
  constructor(server: HttpServer) {
    ServerSocket.instance = this;
    const chat = Service(ChatModel);
    this.chat = chat;

    this.io = new Server(server, {
      pingInterval: 10000,
      pingTimeout: 5000,
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    this.io.on("connect", this.connect);
  }

  connect = (socket: Socket) => {
    console.info("Connection received from ", socket.id);

    socket.on("joinProject", (data) => {
      socket.join(data);
    });

    socket.on("sendChat", async (req, data) => {
      const chatData = {
        project: data.project,
        user: data.user,
        content: data.content,
        createdAt: Date.now(),
      };

      const newChat = await this.chat.create(req, chatData);

      try {
        const lastChat = await this.chat.findAll(
          req,
          { limit: 1 },
          { _id: newChat?._id }
        );

        socket.to(data.project).emit("receiveChat", lastChat.result[0]);
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("disconnect", () => {
      console.info("Disconnect received from: ", socket.id);
    });
  };
}
