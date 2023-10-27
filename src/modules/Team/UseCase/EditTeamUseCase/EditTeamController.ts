import { Request, Response } from "express";
        import { EditTeamUseCase } from "./EditTeamUseCase";
        import { EditTeamValidation } from "./EditTeamValidation";
        import { container } from "tsyringe";
        import { ReturnAPI } from "@helpers/returnAPI";
        
        export class EditTeamController {
        
            async handle(req: Request, res: Response) {
          
                const data = EditTeamValidation.validate(req.body);
        
                const editteamUseCase = container.resolve(EditTeamUseCase);
        
        
                await editteamUseCase.execute();
        
                return ReturnAPI.success(res, { data: null, message: "", developerMessage: "", statusHTTP: 200 });
            }
        }