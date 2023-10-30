import { ApiError } from "@errors/ApiError";
import { Match } from "@models/Match";
import { IMatchRepository } from "@repositories/IMatchRepository";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";

export interface IUpdateMatchUseCase {
    match_id: string
    goalsTeamA: number;
    goalsTeamB: number;
}
        @injectable()
        export class UpdateMatchUseCase {
            
            constructor(
                @inject("MatchRepository") private matchRepository:IMatchRepository,
                @inject("TeamRepository") private teamRepository:ITeamRepository
                ){}
    
            async execute({match_id, goalsTeamA, goalsTeamB}: IUpdateMatchUseCase): Promise<void> {
                
                const matchExist = await this.matchRepository.findById(match_id);

                if(!matchExist) throw new ApiError("Partida não encontrada.");

                const teamA = await this.teamRepository.findById(matchExist.teamA_id)
                if(!teamA) throw new ApiError("Time A informado não foi encontrado.");

                const teamB = await this.teamRepository.findById(matchExist.teamB_id)
                if(!teamA) throw new ApiError("Time B informado não foi encontrado.");

                let result: "TeamA" | "TeamB" | "Empate" = "Empate";

                if (goalsTeamA > goalsTeamB) {
                    result = "TeamA";
                } else if (goalsTeamA < goalsTeamB) {
                    result = "TeamB";
                }
        
                const updatedMatch = new Match(goalsTeamA, goalsTeamB, result, teamA, teamB);
        
                // Salva na tabela "matches"
                matchExist.goalsTeamA += teamA.goals;
                matchExist.goalsTeamB += teamB.goals;
        
                await this.teamRepository.update(teamA);
                await this.teamRepository.update(teamB);
        
                await this.matchRepository.update(matchExist);
        
                return;
            }
           }