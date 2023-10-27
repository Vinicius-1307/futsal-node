import { ApiError } from "@errors/ApiError";
import { IUserRepository } from "@repositories/IUserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    account: {
        email: string;
    };
    token: string;
}

        @injectable()
        export class AuthUserUseCase {
            
            constructor(@inject("UserRepository") private userRepository:IUserRepository){}
    
            async execute({ email, password }: IRequest): Promise<IResponse> {

                const account = await this.userRepository.findByEmail(email);

                if(!account) {
                    throw new ApiError("E-mail ou senha estão incorretos.")
                }
                const passwordMatch = await compare(password, account.password as string);

                if (!passwordMatch) {
                    throw new ApiError("Email ou senha estão incorretos");
                }
        
                const token = sign({}, process.env.JWT_SECRET as string, {
                    subject: account.id,
                    expiresIn: "1d",
                });
        
                await this.userRepository.updateLogin(account.id as string);
        
                delete account.password;
        
                const tokenReturn: IResponse = {
                    token,
                    account: account
                }
        
                return tokenReturn;
            }
    
           }