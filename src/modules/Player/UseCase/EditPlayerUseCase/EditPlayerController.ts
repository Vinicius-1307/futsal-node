import { Request, Response } from "express";
        import { EditPlayerUseCase } from "./EditPlayerUseCase";
        import { EditPlayerValidation } from "./EditPlayerValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class EditPlayerController {
        
            async handle(req: Request, res: Response) {
          
                const {player_id} = req.params;
                const data = EditPlayerValidation.validate(req.body);
        
                const editplayerUseCase = container.resolve(EditPlayerUseCase);
        
                await editplayerUseCase.execute({...data, player_id});
        
                return ReturnApi.success(res, { 
                    data: data, 
                    message: "Jogador atualizado com sucesso.", 
                    developerMessage: "Updated player.", 
                    statusHTTP: 200 
                });
            }
        }