import { Request } from "express";
import { Model, Types } from "mongoose";
import * as R from "ramda";
import {
  createItemFromPath,
  getItemFromPath,
  removeItemFromPath,
  removeUndefined,
  updateItemFromPath,
} from "../utils/object";
import {
  IDefaultOptions,
  IFindAllOptions,
  IFindAllResponse,
  IRequest,
} from "../interfaces/service";

export default (model: Model<any>, defaultOptions: IDefaultOptions = {}) => {
  const uuid = (id: number) => Types.ObjectId;

  const toObject = (data: any) => JSON.parse(JSON.stringify(data));

  const create = (req: any = {}, data: any = {}) => {
    return model.create(removeUndefined(data));
  };

  const findAll = async (
    req: IRequest = {},
    query: any = {},
    options: IFindAllOptions | any = {}
  ): Promise<IFindAllResponse> => {
    const limit = parseInt(req?.query?.limit || "10", 10);
    const page = parseInt(req?.query?.page || "1", 10);

    const sort = options.sort || { _id: 1 };
    const project = options.project || "-nenhum";
    const populate = defaultOptions.populate;

    const result = await model
      .aggregate([
        {
          $facet: {
            data: [
              {
                $match: query,
              },
              {
                $skip: (page - 1) * limit,
              },
              {
                $limit: limit,
              },
              {
                $sort: sort,
              },
            ],
            total: [
              {
                $match: query,
              },
              { $count: "total" },
            ],
          },
        },
      ])
      .project(project);

    const newResult = populate ? await populate(result) : result;
    return {
      result: newResult?.[0]?.data || [],
      total: newResult?.[0]?.total[0]?.total || 0,
      page,
      totalPages: Math.ceil(newResult?.[0]?.total[0]?.total / limit),
      limit,
    };
  };


  const findOne = async (req = {}, query = {}, ...props: any) => {
    const populate = defaultOptions.populate;

    return model.findOne(query, ...props).then(async (data) => {
      const newData = populate ? await populate(data) : data;

      return newData ? newData.toObject() : newData;
    });
  };

  const remove = (req: any = {}, query: any = {}) => {
    return model.deleteOne(query);
  };

  const update = (req = {}, query = {}, data = {}) => {
    return model.updateOne(query, removeUndefined(data));
  };

  const findOnePath = async (req = {}, query = {}, path = "") => {
    const document = await findOne(req, query);
    return getItemFromPath(document, path);
  };

  const findPath = async (req = {}, query = {}, path = "") => {
    const document = await findOne(req, query);

    const result = await getItemFromPath(document, path);

    return {
      data: result,
    };
  };

  const createPath = async (req = {}, query = {}, path = "", data = {}) => {
    const document = await findOne(req, query);

    console.log("document haha", document);

    const updatedDocument = createItemFromPath(document, path, removeUndefined(data));
    console.log("updated Document", updatedDocument);

    await update(req, query, updatedDocument);

    return R.last(await findOnePath(req, query, path));
  };

  const updatePath = async (req = {}, query = {}, path = "", data = {}) => {
    const document = await findOne(req, query);

    const updatedDocument = updateItemFromPath(
      toObject(document),
      path,
      removeUndefined(data)
    );

    await update(req, query, updatedDocument);

    return findOnePath(req, query, path);
  };

  const removePath = async (req = {}, query = {}, path = "") => {
    const document = await findOne(req, query);

    const updatedDocument: any = removeItemFromPath(document, path);

    await update(req, query, updatedDocument);

    return {};
  };

  return {
    create,
    findOne,
    findAll,
    remove,
    update,
    uuid,
    createPath,
    updatePath,
    removePath,
    findPath,
    findOnePath,
  };
};
