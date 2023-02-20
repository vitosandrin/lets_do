import dotenv from "dotenv";
import { Request } from "express";
import * as jwt from "jsonwebtoken";
import IUser from "../models/users";
import Service from "../services/service";
import { UserModel } from "../models/users";
dotenv.config();

export interface IToken {
  id: number;
  email: string;
}

export const createToken = async (user: IUser, req: Request) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    JSON.stringify(process.env.JWT_SECRET)
  );

  return token;
};

export const getToken = (req: Request) => {
  const token = req.headers.authorization;
  return token;
};

export const getUserByToken = async (
  token: jwt.JwtPayload | any,
  req: Request
) => {
  const userService = Service(UserModel);

  const decoded = jwt.verify(token, JSON.stringify(process.env.JWT_SECRET));
  const id = (decoded as IToken).id;

  const user = await userService.findOne(req, { _id: id });

  return user;
};
