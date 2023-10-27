import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreateTeamController } from "@modules/Team/UseCase/CreateTeamUseCase/CreateTeamController";
import express from "express";

export const teamRouter = express.Router();

const authMiddleware = new AuthMiddleware();
const createTeamController = new CreateTeamController();

teamRouter.post("/", authMiddleware.auth, createTeamController.handle)