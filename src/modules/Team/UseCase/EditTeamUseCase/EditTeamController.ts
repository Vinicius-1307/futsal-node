import { Request, Response } from "express";
        import { EditTeamUseCase } from "./EditTeamUseCase";
        import { EditTeamValidation } from "./EditTeamValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class EditTeamController {
        
            async handle(req: Request, res: Response) {
          
                const {team_id} = req.params;
                const {name} = EditTeamValidation.validate(req.body);
                
                const editteamUseCase = container.resolve(EditTeamUseCase);
        
        
                await editteamUseCase.execute({name, team_id});
        
                return ReturnApi.success(res, { 
                    data: null, 
                    message: "Time atualizado com sucesso.", 
                    developerMessage: "Updated team", 
                    statusHTTP: 200 });
            }
        }