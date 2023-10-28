import { ApiError } from "@errors/ApiError";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";
    
export interface IDeleteTeamUseCaseData{
    team_id: string
}

        @injectable()
        export class DeleteTeamUseCase {
            
            constructor(@inject("TeamRepository") private teamRepository:ITeamRepository){}
    
            async execute({team_id}: IDeleteTeamUseCaseData): Promise<void> {

                const team = await this.teamRepository.findById(team_id)
                
                if(!team) {
                    throw new ApiError("Time não encontrado.");
                }

                await this.teamRepository.delete(team_id)
                
                return;
            }
    
           }