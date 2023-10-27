import { Response } from "express";

interface MessageReturnInterface {
  message: string | null;
  developerMessage: string | null | undefined;
  data: object | null;
  statusHTTP: number;
}

export class ReturnApi {
  public static success(res: Response, data: MessageReturnInterface) {
    return res.status(data.statusHTTP).json(data);
  }
  public static error(res: Response, data: MessageReturnInterface) {
    return res.status(data.statusHTTP).json(data);
  }
}