import { Request, Response } from "express";
        import { AuthUserUseCase } from "./AuthUserUseCase";
        import { AuthUserValidation } from "./AuthUserValidation";
        import { container } from "tsyringe";
        import { ReturnApi } from "@helpers/returnApi";
        
        export class AuthUserController {
        
            async handle(req: Request, res: Response) {
          
                const {email, password} = AuthUserValidation.validate(req.body);
        
                const authuserUseCase = container.resolve(AuthUserUseCase);
        
        
                const token = await authuserUseCase.execute({email, password});
        
                return ReturnApi.success(res, { 
                    data: token, 
                    message: "Autenticado com sucesso.", 
                    developerMessage: "Authorized", 
                    statusHTTP: 200 });
            }
        }