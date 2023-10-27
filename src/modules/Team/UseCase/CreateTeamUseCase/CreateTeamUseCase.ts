import { ApiError } from "@errors/ApiError";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";

    export interface ICreateTeamUseCaseData{
        name: string
    }
        @injectable()
        export class CreateTeamUseCase {
            
            constructor(@inject("TeamRepository") private teamRepository:ITeamRepository){}
    
            async execute({name}: ICreateTeamUseCaseData): Promise<void>{
    
                const nameAlreadyExist = await this.teamRepository.findByName(name);

                if(nameAlreadyExist) {
                    throw new ApiError("Esse nome de time já existe.", 400)
                }

                await this.teamRepository.create({name});
    
                return;
            }
    
           }