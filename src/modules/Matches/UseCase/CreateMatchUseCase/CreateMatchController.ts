import { Request, Response } from "express";
        import { CreateMatchUseCase } from "./CreateMatchUseCase";
        import { CreateMatchValidation } from "./CreateMatchValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class CreateMatchController {
        
            async handle(req: Request, res: Response) {
          
                const data = CreateMatchValidation.validate(req.body);
        
                const creatematchUseCase = container.resolve(CreateMatchUseCase);
        
                await creatematchUseCase.execute({...data});
        
                return ReturnApi.success(res, { 
                    data: data, 
                    message: "Partida criada com sucesso.", 
                    developerMessage: "Created match.", 
                    statusHTTP: 200
                 });
            }
        }