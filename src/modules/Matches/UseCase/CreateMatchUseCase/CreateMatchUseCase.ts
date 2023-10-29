import { ApiError } from "@errors/ApiError";
import { IMatchRepository } from "@repositories/IMatchRepository";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";

export interface ICreateMatchUseCase {
    start_time: string;
    end_time: string;
    teamA_id: string;
    teamB_id: string;
}

        @injectable()
        export class CreateMatchUseCase {
            
            constructor(
                @inject("MatchRepository") private matchRepository:IMatchRepository,
                @inject("TeamRepository") private teamRepository:ITeamRepository
            ){}
    
            async execute({
                start_time, 
                end_time,
                teamA_id, 
                teamB_id
            }:ICreateMatchUseCase):Promise<void> {
                
                const teamAExist = await this.teamRepository.findById(teamA_id)
                if(!teamAExist) throw new ApiError("Time A informado não foi encontrado.");

                const teamBExist = await this.teamRepository.findById(teamB_id)
                if(!teamBExist) throw new ApiError("Time B informado não foi encontrado.");

                const startTimeDate = new Date(start_time);
                const endTimeDate = new Date(end_time);

                await this.matchRepository.create({
                    start_time: startTimeDate, 
                    end_time: endTimeDate,
                    teamA_id, 
                    teamB_id
                })

                return;
            }
    
           }