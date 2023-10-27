import { ApiError } from "@errors/ApiError";
import { IUserRepository } from "@repositories/IUserRepository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
    
interface ICreateUserUseCaseData {
    name: string;
    email: string;
    password: string;
}
        @injectable()
        export class CreateUserUseCase {
            
            constructor(@inject("UserRepository") private userRepository:IUserRepository){}
    
            async execute({
                name,
                email, 
                password 
            }: ICreateUserUseCaseData): Promise<void> {
    
                const accountAlreadyExists = await this.userRepository.findByEmail(email);

                if(accountAlreadyExists) {
                    throw new ApiError("E-mail já cadastrado", 400)
                }

                const passwordHash = await hash(password, 8);

                await this.userRepository.create({name, email, password: passwordHash})
                
                return;
            }
    
           }