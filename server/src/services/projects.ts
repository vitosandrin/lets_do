import { UserModel } from "./../models/users";
import { Request, Response } from "express";
import { ProjectModel } from "../models/projects";
import Service from "./service";
import { response } from "../utils/response";
import { Types } from "mongoose";

class Projects {
  public project;
  constructor() {
    const populate = async (data: any) => {
      await UserModel.populate(data, {
        path: "data.user",
        select: "_id name email",
      });

      return data;
    };
    const project = Service(ProjectModel, { populate });
    this.project = project;
  }

  new = async (req: Request | any, res: Response) => {
    const { body, user } = req;

    if (!body.name) {
      response(res, 404, "Informe o nome do projeto!");
      return;
    }

    const data = {
      user: user.id,
      name: body.name,
      description: body.description,
    };

    try {
      const project = await this.project.create(req, data);

      response(res, 201, "Projeto criado com sucesso!", project);
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  update = async (req: Request, res: Response) => {
    const { body, params } = req;

    const project = await this.project.findOne(req, { _id: params.id });

    if (!project) {
      response(res, 404, "Projeto não encontrado!");
      return;
    }

    const data = {
      name: body.name ? body.name : undefined,
      description: body.description ? body.description : undefined,
    };

    try {
      await this.project.update(req, { _id: params.id }, data);

      response(res, 200, "Projeto atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  findAll = async (req: Request | any, res: Response) => {
    const { user } = req;

    const where = {
      user: new Types.ObjectId(user.id),
    };

    try {
      const projects = await this.project.findAll(req, where);
      response(res, 200, "OK", projects);
    } catch (error) {
      response(res, 502);
    }
  };

  findOne = async (req: Request | any, res: Response) => {
    const { user, params } = req;

    const where = {
      user: new Types.ObjectId(user.id),
      _id: params.id,
    };

    try {
      const project = await this.project.findOne(req, where);
      if (!project) {
        response(res, 404, "Projeto não encontrado!", project);
        return;
      }
      response(res, 200, "OK", project);
    } catch (error) {
      response(res, 502);
    }
  };

  remove = async (req: Request, res: Response) => {
    const { body } = req;

    try {
      for (let p of body.projects) {
        const project = await this.project.findOne(req, { _id: p._id });
        if (!project) {
          response(res, 404, `Project id:'${p._id}' não encontrado!`);
          return;
        }
        await this.project.remove(req, { _id: p._id });
      }

      response(
        res,
        200,
        `${body.projects.length} projetos excluidos com sucesso!!`
      );
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  newTask = async (req: Request, res: Response) => {
    const { body, params } = req;

    if (!params.id) {
      response(res, 404, "Informe o projeto!");
      return;
    }

    try {
      for (let t of body.tasks) {
        await this.project.createPath(req, { _id: params.id }, "tasks", {
          name: t.name,
          description: t.description,
          completed: false,
        });
      }

      response(res, 201, `${body.tasks.length} tasks criada com sucesso!`);
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  findOneTask = async (req: Request, res: Response) => {
    const { params } = req;

    if (!params.id) {
      response(res, 404, "Informe o projeto!");
      return;
    }

    try {
      const task = await this.project.findOnePath(
        req,
        { _id: params.id },
        `tasks._id:${params.task}`
      );

      response(res, 200, "OK", task);
    } catch (error) {
      console.log(error);
      response(res, 502);
    }
  };

  updateTask = async (req: Request, res: Response) => {
    const { body, params } = req;

    const data = {
      name: body.name ? body.name : undefined,
      description: body.description ? body.description : undefined,
    };

    try {
      const task = await this.project.updatePath(
        req,
        { _id: params.id },
        `tasks._id:${params.task}`,
        data
      );
      response(res, 200, "Task atualizada com sucesso!", task);
    } catch (error) {
      response(res, 502);
    }
  };

  removeTask = async (req: Request, res: Response) => {
    const { body, params } = req;

    try {
      for (let t of body.tasks) {
        await this.project.removePath(
          req,
          { _id: params.id },
          `tasks._id:${t._id}`
        );
      }
      response(res, 200, `${body.tasks.length} tasks excluídas com sucesso!`);
    } catch (error) {
      response(res, 502);
    }
  };

  setCompleted = async (req: Request, res: Response) => {
    const { body, params } = req;

    try {
      for (let t of body.tasks) {
        const task = await this.project.findPath(
          req,
          { _id: params.id },
          `tasks._id:${t._id}`
        );
        await this.project.updatePath(
          req,
          { _id: params.id },
          `tasks._id:${t._id}`,
          { completed: !task?.data?.completed }
        );
      }
      response(res, 200, `${body.tasks.length} tasks atualizadas com sucesso!`);
    } catch (error) {
      response(res, 502);
    }
  };
}

export default Projects;
