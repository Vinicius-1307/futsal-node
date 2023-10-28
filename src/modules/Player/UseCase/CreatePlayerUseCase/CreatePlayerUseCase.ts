import { ApiError } from "@errors/ApiError";
import { IPlayerRepository } from "@repositories/IPlayerRepository";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";
    
export interface ICreatePlayerUseCaseData{
    name: string;
    shirt_number: number;
    team_id:string;
}
        @injectable()
        export class CreatePlayerUseCase {
            
            constructor(
                @inject("PlayerRepository") private playerRepository:IPlayerRepository,
                @inject("TeamRepository") private teamRepository:ITeamRepository
            ){}
    
            async execute({name, shirt_number, team_id}: ICreatePlayerUseCaseData): Promise<void>{

                const teamExist = await this.teamRepository.findById(team_id)
                
                if(!teamExist) throw new ApiError("Time informado não encontrado.");
                  
                const numberInUse = await this.playerRepository.findByShirtNumber(team_id, shirt_number);
                
                if (numberInUse) throw new ApiError("Esse número de camisa já está em uso.");
        
                await this.playerRepository.create({name, shirt_number, team_id});
                
                return;
            }
           }