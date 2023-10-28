import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreatePlayerController } from "@modules/Player/UseCase/CreatePlayerUseCase/CreatePlayerController";
import express from "express";

export const playerRouter = express.Router();

const authMiddleware = new AuthMiddleware();

const createPlayerController = new CreatePlayerController();

playerRouter.post("/", authMiddleware.auth, createPlayerController.handle);