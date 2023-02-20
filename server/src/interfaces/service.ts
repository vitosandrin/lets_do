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
