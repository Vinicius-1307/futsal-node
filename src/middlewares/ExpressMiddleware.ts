import { ApiError } from "@errors/ApiError";
import { ReturnApi } from "@helpers/returnApi";
import { NextFunction, Request, Response } from "express";

export class ExpressMiddleware {
  static handleErrors(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (err instanceof ApiError) {
      return ReturnApi.error(res, {
        data: null,
        developerMessage: err.message,
        message: err.message,
        statusHTTP: err.statusCode,
      });
    }

    return ReturnApi.error(res, {
      data: null,
      developerMessage: err.message,
      message: err.message,
      statusHTTP: 500,
    });
  }
}
