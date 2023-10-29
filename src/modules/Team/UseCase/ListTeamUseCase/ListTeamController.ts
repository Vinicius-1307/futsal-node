import { Request, Response } from "express";
        import { ListTeamUseCase } from "./ListTeamUseCase";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class ListTeamController {
        
            async handle(req: Request, res: Response) {
                const listteamUseCase = container.resolve(ListTeamUseCase);
        
                const teams = await listteamUseCase.execute();
        
                return ReturnApi.success(res, { 
                    data: teams, 
                    message: "Times listados.", 
                    developerMessage: "Listed teams", 
                    statusHTTP: 200 
                });
            }
        }