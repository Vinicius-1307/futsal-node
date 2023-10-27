import { AuthUserController } from "@modules/Auth/UseCase/AuthUserUseCase/AuthUserController";
import express from "express";

export const authRouter = express.Router();

const authUserController = new AuthUserController();

authRouter.post("/", authUserController.handle)