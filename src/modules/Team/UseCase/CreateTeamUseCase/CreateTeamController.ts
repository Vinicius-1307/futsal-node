import { Request, Response } from "express";
        import { CreateTeamUseCase } from "./CreateTeamUseCase";
        import { CreateTeamValidation } from "./CreateTeamValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class CreateTeamController {
        
            async handle(req: Request, res: Response) {
          
                const name = CreateTeamValidation.validate(req.body);
        
                const createteamUseCase = container.resolve(CreateTeamUseCase);
        
                await createteamUseCase.execute(name);
        
                return ReturnApi.success(res, { 
                    data: name, 
                    message: "Time criado com sucesso.", 
                    developerMessage: "Team created.", 
                    statusHTTP: 200 });
            }
        }