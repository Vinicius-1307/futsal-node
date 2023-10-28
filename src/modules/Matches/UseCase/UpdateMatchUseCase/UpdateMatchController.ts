import { Request, Response } from "express";
        import { UpdateMatchUseCase } from "./UpdateMatchUseCase";
        import { UpdateMatchValidation } from "./UpdateMatchValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class UpdateMatchController {
        
            async handle(req: Request, res: Response) {
                
                const {match_id} = req.params;
                const data = UpdateMatchValidation.validate(req.body);
        
                const updatematchUseCase = container.resolve(UpdateMatchUseCase);
        
                await updatematchUseCase.execute({...data, match_id});
        
                return ReturnApi.success(res, { 
                    data: data, 
                    message: "Partida atualizada com sucesso.", 
                    developerMessage: "Updated match.", 
                    statusHTTP: 200 
                });
            }
        }