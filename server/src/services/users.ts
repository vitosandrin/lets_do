import { ProjectModel } from "../models/projects";
import { Request, Response } from "express";
import md5 from "md5";
import { UserModel } from "./../models/users";

import { response } from "../utils/response";
import Service from "./service";
import { createToken } from "../utils/token";

class Users {
  public user;
  constructor() {
    const user = Service(UserModel);
    this.user = user;
  }

  register = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      if (!body.name) {
        response(res, 422, "Informe o nome que seja cadastrar");
        return;
      }
      if (!body.email) {
        response(res, 422, "Informe o email que seja cadastrar");
        return;
      }

      const userExist = await this.user.findOne(req, { email: body?.email });
      if (userExist) {
        response(res, 422, "Email já cadastrado no sistema");
        return;
      }

      if (!body.password) {
        response(res, 422, "Informe a senha que seja cadastrar");
        return;
      }
      if (!body.rePassword) {
        response(res, 422, "Informe confirmação da senha que seja cadastrar");
        return;
      }

      if (body.password !== body.rePassword) {
        response(res, 422, "A senha e a confirmação da senha não conferem!");
        return;
      }

      const data = {
        name: body.name,
        email: body.email,
        password: md5(body.password),
      };

      const user = await this.user.create(req, data);
      user.password = undefined;
      const token = await createToken(user, req);

      response(res, 201, "Usuário criado com sucesso!", { user, token });
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  login = async (req: Request, res: Response) => {
    const { body } = req;

    if (!body.email) {
      response(res, 422, "Informe o email para fazer login");
      return;
    }
    if (!body.password) {
      response(res, 422, "Informe a senha para fazer login");
      return;
    }

    try {
      const user = await this.user.findOne(req, {
        email: body.email,
        password: md5(body.password),
      });
      if (!user) {
        response(res, 401, "E-mail ou senha inválidos!");
        return;
      }

      const token = await createToken(user, req);
      user.password = undefined;

      return response(res, 200, "Login realizado com sucesso!", {
        user,
        token,
      });
    } catch (error) {
      response(res, 502);
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const users = await this.user.findAll(req);
      response(res, 200, "OK", users);
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  findOne = async (req: Request, res: Response) => {
    const { params } = req;

    try {
      const user = await this.user.findOne(req, { _id: params.id });
      user.password = undefined;

      if (!user) {
        response(res, 404, "Usuário não encontrado!");
        return;
      }

      response(res, 200, "OK", user);
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  remove = async (req: Request, res: Response) => {
    const { params } = req;

    const user = await this.user.findOne(req, { _id: params?.id });
    if (!user) {
      response(res, 404, "Usuário não encontrado!");
      return;
    }
    try {
      await this.user.remove(req, { _id: params.id });

      response(res, 200, `Usuário excluido com sucesso!`, user);
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  update = async (req: Request, res: Response) => {
    const { body, params } = req;

    const user = await this.user.findOne(req, { _id: params.id });

    if (!user) {
      response(res, 404, "Usuario não encontrado!");
      return;
    }

    const data = {
      name: body.name ? body.name : undefined,
      email: body.email ? body.email : undefined,
    };

    try {
      await this.user.update(req, { _id: params.id }, data);
      response(res, 200, "Usuario atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };
}

export default Users;
