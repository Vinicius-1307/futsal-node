import { Request, Response } from "express";
        import { CreateUserUseCase } from "./CreateUserUseCase";
        import { CreateUserValidation } from "./CreateUserValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class CreateUserController {
        
            async handle(req: Request, res: Response) {
          
                const {email, password, name} = CreateUserValidation.validate(req.body);
        
                const createuserUseCase = container.resolve(CreateUserUseCase);
        
        
                await createuserUseCase.execute({email, password, name});
        
                return ReturnApi.success(res, { 
                    data: null, 
                    message: "Conta criada com sucesso.", 
                    developerMessage: "Account created.", 
                    statusHTTP: 20
                });
            }
        }