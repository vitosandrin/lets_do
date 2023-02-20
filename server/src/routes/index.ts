import { Application, Request, Response } from "express";
import { log } from "../middlewares/log";
import { auth } from "./../middlewares/auth";

import userRoutes from "./users";
import projectRoutes from "./projects";
import { response } from "../utils/response";

export default (app: Application) => {
  app.all("/", log, (req: Request, res: Response) => response(res, 200, "OK"));

  app.use("/user", log, userRoutes);
  app.use("/project", log, auth, projectRoutes);
};
