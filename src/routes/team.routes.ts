import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreateTeamController } from "@modules/Team/UseCase/CreateTeamUseCase/CreateTeamController";
import { EditTeamController } from "@modules/Team/UseCase/EditTeamUseCase/EditTeamController";
import express from "express";

export const teamRouter = express.Router();

const authMiddleware = new AuthMiddleware();
const createTeamController = new CreateTeamController();
const updateTeamController = new EditTeamController();

teamRouter.post("/", authMiddleware.auth, createTeamController.handle);

teamRouter.put("/:team_id", authMiddleware.auth, updateTeamController.handle);