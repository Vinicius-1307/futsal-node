import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreateMatchController } from "@modules/Matches/UseCase/CreateMatchUseCase/CreateMatchController";
import { DeleteMatchController } from "@modules/Matches/UseCase/DeleteMatchUseCase/DeleteMatchController";
import { UpdateMatchController } from "@modules/Matches/UseCase/UpdateMatchUseCase/UpdateMatchController";
import express from "express";

export const matchRouter = express.Router();

const authMiddleware = new AuthMiddleware();

const createMatchController = new CreateMatchController();
const updateMatchController = new UpdateMatchController();
const deleteMatchController = new DeleteMatchController();

matchRouter.post("/", authMiddleware.auth, createMatchController.handle);

matchRouter.patch("/:match_id", authMiddleware.auth, updateMatchController.handle);

matchRouter.delete("/:match_id", authMiddleware.auth, deleteMatchController.handle);