import { ApiError } from "@errors/ApiError";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";
    
export interface IUpdateTeamUseCaseData{
    name: string,
    team_id: string
}
        @injectable()
        export class EditTeamUseCase {
            
            constructor(@inject("TeamRepository") private teamRepository:ITeamRepository){}
    
            async execute({team_id, name}: IUpdateTeamUseCaseData): Promise<void> {

                const team = await this.teamRepository.findById(team_id)
                
                if(!team) {
                    throw new ApiError("Time não encontrado.");
                }   

                const nameAlreadyExist = await this.teamRepository.findByName(name);

                if(nameAlreadyExist) {
                    throw new ApiError("Esse nome de time já existe.", 400)
                }
                
                await this.teamRepository.updateTeam({
                    name,
                    team_id
                })
    
                return;
            }
    
           }