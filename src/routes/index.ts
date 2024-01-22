import express, { Request, Response } from "express";
import { userRouter } from "./user.routes";
import { teamRouter } from "./team.routes";
import { playerRouter } from "./player.routes";
import { matchRouter } from "./match.routes";

export const routes = express.Router()

routes.use("/users", userRouter);

routes.use("/teams", teamRouter);

routes.use("/players", playerRouter);

routes.use("/matches", matchRouter);