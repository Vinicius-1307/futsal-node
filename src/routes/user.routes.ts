import { AuthUserController } from "@modules/Auth/UseCase/AuthUserUseCase/AuthUserController";
import { CreateUserController } from "@modules/User/UseCase/CreateUserUseCase/CreateUserController";
import express from "express";

export const userRouter = express.Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

userRouter.post("/signin/", authUserController.handle)

userRouter.post("/", createUserController.handle)