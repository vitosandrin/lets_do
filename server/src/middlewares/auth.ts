import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { response } from "../utils/response";
import { getToken } from "../utils/token";

export const auth = async (req: Request | any, res: Response, next: NextFunction) => {
  if (!req?.headers?.authorization) return response(res, 401, "Unauthorized");

  const token: any = getToken(req);

  if (!token) return response(res, 401, "Unauthorized");

  try {
    const verified = jwt.verify(token, JSON.stringify(process.env.JWT_SECRET));
    req.user = verified
    next();
  } catch (error) {
    response(res, 400, "Invalid Token!");
  }
};
