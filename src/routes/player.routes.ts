import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreatePlayerController } from "@modules/Player/UseCase/CreatePlayerUseCase/CreatePlayerController";
import { EditPlayerController } from "@modules/Player/UseCase/EditPlayerUseCase/EditPlayerController";
import express from "express";

export const playerRouter = express.Router();

const authMiddleware = new AuthMiddleware();

const createPlayerController = new CreatePlayerController();
const updatePlayerController = new EditPlayerController();

playerRouter.post("/", authMiddleware.auth, createPlayerController.handle);

playerRouter.put("/:player_id", authMiddleware.auth, updatePlayerController.handle);