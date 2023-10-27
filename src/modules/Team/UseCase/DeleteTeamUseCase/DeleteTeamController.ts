import { Request, Response } from "express";
        import { DeleteTeamUseCase } from "./DeleteTeamUseCase";
        import { DeleteTeamValidation } from "./DeleteTeamValidation";
        import { container } from "tsyringe";
        import { ReturnAPI } from "@helpers/returnAPI";
        
        export class DeleteTeamController {
        
            async handle(req: Request, res: Response) {
          
                const data = DeleteTeamValidation.validate(req.body);
        
                const deleteteamUseCase = container.resolve(DeleteTeamUseCase);
        
        
                await deleteteamUseCase.execute();
        
                return ReturnAPI.success(res, { data: null, message: "", developerMessage: "", statusHTTP: 200 });
            }
        }