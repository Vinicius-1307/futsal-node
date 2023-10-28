import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreatePlayerController } from "@modules/Player/UseCase/CreatePlayerUseCase/CreatePlayerController";
import { DeletePlayerController } from "@modules/Player/UseCase/DeletePlayerUseCase/DeletePlayerController";
import { EditPlayerController } from "@modules/Player/UseCase/EditPlayerUseCase/EditPlayerController";
import express from "express";

export const playerRouter = express.Router();

const authMiddleware = new AuthMiddleware();

const createPlayerController = new CreatePlayerController();
const updatePlayerController = new EditPlayerController();
const deletePlayerController = new DeletePlayerController();

playerRouter.post("/", authMiddleware.auth, createPlayerController.handle);

playerRouter.put("/:player_id", authMiddleware.auth, updatePlayerController.handle);

playerRouter.delete("/:player_id", authMiddleware.auth, deletePlayerController.handle);