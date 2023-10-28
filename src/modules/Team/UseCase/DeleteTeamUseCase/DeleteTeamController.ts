import { Request, Response } from "express";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";
import { container } from "tsyringe";
import { ReturnApi } from "@helpers/returnApi";
        
        export class DeleteTeamController {
        
            async handle(req: Request, res: Response) {
                
                const {team_id} = req.params;
        
                const deleteteamUseCase = container.resolve(DeleteTeamUseCase);
    
                await deleteteamUseCase.execute({team_id});
        
                return ReturnApi.success(res, { 
                    data: null, 
                    message: "Time deletado com sucesso.", 
                    developerMessage: "Deleted team.", 
                    statusHTTP: 200 
                });
            }
        }