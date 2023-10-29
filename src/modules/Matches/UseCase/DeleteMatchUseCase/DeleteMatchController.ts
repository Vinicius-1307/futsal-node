import { Request, Response } from "express";
        import { DeleteMatchUseCase } from "./DeleteMatchUseCase";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class DeleteMatchController {
        
            async handle(req: Request, res: Response) {
                
                const {match_id} = req.params;
        
                const deletematchUseCase = container.resolve(DeleteMatchUseCase);

                await deletematchUseCase.execute({match_id});
        
                return ReturnApi.success(res, { 
                    data: null, 
                    message: "Partida deletada.", 
                    developerMessage: "Deleted match.", 
                    statusHTTP: 200 
                });
            }
        }