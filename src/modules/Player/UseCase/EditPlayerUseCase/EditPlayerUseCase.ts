import { ApiError } from "@errors/ApiError";
import { IPlayerRepository } from "@repositories/IPlayerRepository";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";
   
export interface IUpdatePlayerUseCaseData{
    name: string;
    shirt_number: number;
    team_id:string;
    player_id: string;
}
        @injectable()
        export class EditPlayerUseCase {
            constructor(
                @inject("PlayerRepository") private playerRepository:IPlayerRepository,
                @inject("TeamRepository") private teamRepository:ITeamRepository
                ){}
    
            async execute({name, shirt_number, team_id, player_id}:IUpdatePlayerUseCaseData):Promise<void>{

                const playerExist = await this.playerRepository.findById(player_id);

                if(!playerExist) throw new ApiError("Jogador não encontrado.");
    
                const teamExist = await this.teamRepository.findById(team_id)
                
                if(!teamExist) throw new ApiError("Time informado não encontrado.");
                  
                const numberInUse = await this.playerRepository.findByShirtNumber(team_id, shirt_number);
                
                if (numberInUse) throw new ApiError("Esse número de camisa já está em uso.");
        
                await this.playerRepository.update({name, shirt_number, team_id, player_id});
                
                return;
            }
           }