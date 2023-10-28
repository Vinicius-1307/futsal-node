import { Request, Response } from "express";
        import { CreatePlayerUseCase } from "./CreatePlayerUseCase";
        import { CreatePlayerValidation } from "./CreatePlayerValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class CreatePlayerController {
        
            async handle(req: Request, res: Response) {
          
                const data = CreatePlayerValidation.validate(req.body);
        
                const createplayerUseCase = container.resolve(CreatePlayerUseCase);
        
                await createplayerUseCase.execute({...data});
        
                return ReturnApi.success(res, { 
                    data: data, 
                    message: "Jogador criado com sucesso.", 
                    developerMessage: "Player created", 
                    statusHTTP: 200 
                });
            }
        }