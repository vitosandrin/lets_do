import dotenv from "dotenv";
import http from "http";
import { Server, Socket } from "socket.io";
import express from "./config/express";
import { handleSocketConnection } from "./ws";
dotenv.config();

const { APP_PORT, APP_HOST } = process.env;

const app = http.createServer(express);
export const io = new Server(app, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

handleSocketConnection(io);

const server = app.listen(APP_PORT, (): void =>
  console.log(`Server Running at http://${APP_HOST}:${APP_PORT}`)
);

export default server;
