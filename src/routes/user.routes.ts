import { CreateUserController } from "@modules/User/UseCase/CreateUserUseCase/CreateUserController";
import express from "express";

export const userRouter = express.Router();

const createUserController = new CreateUserController();

userRouter.post("/", createUserController.handle)