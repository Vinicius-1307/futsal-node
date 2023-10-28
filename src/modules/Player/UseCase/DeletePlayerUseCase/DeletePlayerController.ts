import { Request, Response } from "express";
        import { DeletePlayerUseCase } from "./DeletePlayerUseCase";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class DeletePlayerController {
        
            async handle(req: Request, res: Response) {

                const {player_id} = req.params;
        
                const deleteplayerUseCase = container.resolve(DeletePlayerUseCase);

                await deleteplayerUseCase.execute({player_id});
        
                return ReturnApi.success(res, { 
                    data: null, 
                    message: "Jogador deletado com sucesso.", 
                    developerMessage: "Deleted player.", 
                    statusHTTP: 200 
                });
            }
        }