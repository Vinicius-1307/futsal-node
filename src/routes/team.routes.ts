import { AuthMiddleware } from "@middlewares/AuthMiddleware";
import { CreateTeamController } from "@modules/Team/UseCase/CreateTeamUseCase/CreateTeamController";
import { DeleteTeamController } from "@modules/Team/UseCase/DeleteTeamUseCase/DeleteTeamController";
import { EditTeamController } from "@modules/Team/UseCase/EditTeamUseCase/EditTeamController";
import { ListTeamOrderByPointsController } from "@modules/Team/UseCase/ListTeamOrderByPointsUseCase/ListTeamOrderByPointsController";
import { ListTeamController } from "@modules/Team/UseCase/ListTeamUseCase/ListTeamController";
import express from "express";

export const teamRouter = express.Router();

const authMiddleware = new AuthMiddleware();
const createTeamController = new CreateTeamController();
const updateTeamController = new EditTeamController();
const deleteTeamController = new DeleteTeamController();
const listTeamController = new ListTeamController();
const listTeamOrderByPoints = new ListTeamOrderByPointsController();

teamRouter.post("/", authMiddleware.auth, createTeamController.handle);

teamRouter.put("/:team_id", authMiddleware.auth, updateTeamController.handle);

teamRouter.delete("/:team_id", authMiddleware.auth, deleteTeamController.handle);

teamRouter.get("/", authMiddleware.auth, listTeamController.handle);

teamRouter.get("/order-by", authMiddleware.auth, listTeamOrderByPoints.handle);