import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreateMatchController } from "@modules/Matches/UseCase/CreateMatchUseCase/CreateMatchController";
import express from "express";

export const matchRouter = express.Router();

const authMiddleware = new AuthMiddleware();

const createMatchController = new CreateMatchController();

matchRouter.post("/", authMiddleware.auth, createMatchController.handle);
