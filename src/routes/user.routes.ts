import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreateUserController } from "@modules/User/UseCase/CreateUserUseCase/CreateUserController";
import express from "express";

export const userRouter = express.Router();

const authMiddleware = new AuthMiddleware();
const createUserController = new CreateUserController();

userRouter.post("/", authMiddleware.auth, createUserController.handle)