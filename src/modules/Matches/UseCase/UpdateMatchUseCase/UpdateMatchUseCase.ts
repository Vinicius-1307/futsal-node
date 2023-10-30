import { ApiError } from "@errors/ApiError";
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
                    matchExist.result = "TeamA";
                } else if (goalsTeamA < goalsTeamB) {
                    matchExist.result = "TeamB";
                } else {
                    matchExist.result = "Empate";
                }

                // Zera os gols e pontos sempre antes de fazer uma alteração.
                teamA.points = 0;
                teamB.points = 0;
                teamA.goals = 0;
                teamB.goals = 0;

                // Salva na tabela "matches"
                matchExist.goalsTeamA += teamA.goals
                matchExist.goalsTeamB += teamB.goals
                
                // Salva na tabela "teams"
                teamA.goals += goalsTeamA;
                teamB.goals += goalsTeamB;

                switch (matchExist.result) {
                    case "TeamA":
                        teamA.points += 3;
                        break;
                    case "TeamB":
                        teamB.points += 3;
                        break;
                    case "Empate":
                        teamA.points += 1;
                        teamB.points += 1;
                        break;
                }

                await this.teamRepository.update(teamA);
                await this.teamRepository.update(teamB);
                
                await this.matchRepository.update(matchExist);
                return;
            }
           }