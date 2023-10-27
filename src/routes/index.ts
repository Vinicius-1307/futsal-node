import express, { Request, Response } from "express";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";

export const routes = express.Router()

routes.use("/auth", authRouter);

routes.use("/user", userRouter);