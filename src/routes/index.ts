import express, { Request, Response } from "express";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { teamRouter } from "./team.routes";
import { playerRouter } from "./player.routes";
import { matchRouter } from "./match.routes";

export const routes = express.Router()

routes.use("/auth", authRouter);

routes.use("/user", userRouter);

routes.use("/team", teamRouter);

routes.use("/player", playerRouter);

routes.use("/match", matchRouter);