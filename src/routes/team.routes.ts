import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreateTeamController } from "@modules/Team/UseCase/CreateTeamUseCase/CreateTeamController";
import { DeleteTeamController } from "@modules/Team/UseCase/DeleteTeamUseCase/DeleteTeamController";
import { EditTeamController } from "@modules/Team/UseCase/EditTeamUseCase/EditTeamController";
import express from "express";

export const teamRouter = express.Router();

const authMiddleware = new AuthMiddleware();
const createTeamController = new CreateTeamController();
const updateTeamController = new EditTeamController();
const deleteTeamController = new DeleteTeamController();

teamRouter.post("/", authMiddleware.auth, createTeamController.handle);

teamRouter.put("/:team_id", authMiddleware.auth, updateTeamController.handle);

teamRouter.delete("/:team_id", authMiddleware.auth, deleteTeamController.handle);