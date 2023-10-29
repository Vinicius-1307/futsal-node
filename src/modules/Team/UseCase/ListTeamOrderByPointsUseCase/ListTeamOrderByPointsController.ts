import { Request, Response } from "express";
        import { ListTeamOrderByPointsUseCase } from "./ListTeamOrderByPointsUseCase";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class ListTeamOrderByPointsController {
        
            async handle(req: Request, res: Response) {
                const listteamorderbypointsUseCase = container.resolve(ListTeamOrderByPointsUseCase);
        
                const teams = await listteamorderbypointsUseCase.execute();
        
                return ReturnApi.success(res, { 
                    data: teams, 
                    message: "Times listados por ordem de pontos.", 
                    developerMessage: "Teams listed in order of points.", 
                    statusHTTP: 200 
                });
            }
        }