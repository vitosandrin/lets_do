import { Aggregate, Query, ObjectId } from "mongoose";

export interface IFindAllOptions {
  sort?: {
    [id: string]: number;
  };
  project?: string;
}

export interface IFindAllResponse {
  result: any[];
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
}

export interface IDefaultOptions {
  populate?: (data: any) => any;
}

export interface IRequest {
  query?: {
    limit?: string;
    page?: string;
  };
}

// export interface IServiceInstance {
//   oid: (id: string) => ObjectId;

//   aggregate: Aggregate<any>;

//   findOne: (req?: Request, query?: any, ...props: any) => Promise<any>;
//   findAll: (
//     req?: Request,
//     query?: any,
//     options?: IFindAllOptions
//   ) => Promise<IFindAllResponse>;
//   create: (req?: Request, data?: any) => Promise<any>;
//   update: (
//     req?: Request,
//     query?: any,
//     data?: any
//   ) => Query<{ ok: number; n: number; nModified: number }, any>;
//   remove: (
//     req?: Request,
//     query?: any
//   ) => Query<{ ok: number; n: number; nModified: number }, any>;

//   hasAny: (req?: Request, fields?: any, exclude?: string) => Promise<string[]>;

//   findOnePath: (req?: Request, query: any, path: string) => Promise<any>;
//   findAllPath: (
//     req?: Request,
//     query: any,
//     path: string
//   ) => Promise<IFindAllResponse>;
//   createPath: (
//     req?: Request,
//     query: any,
//     path: string,
//     data: any
//   ) => Promise<{ ok: number; n: number; nModified: number }>;
//   updatePath: (
//     req?: Request,
//     query: any,
//     path: string,
//     data: any
//   ) => Promise<{ ok: number; n: number; nModified: number }>;
//   removePath: (
//     req?: Request,
//     query: any,
//     path: string
//   ) => Promise<{ ok: number; n: number; nModified: number }>;
// }
