
        import { ITeamRepository } from "@repositories/ITeamRepository";
import { inject, injectable } from "tsyringe";
    
        @injectable()
        export class ListTeamOrderByPointsUseCase {
            
            constructor(@inject("TeamRepository") private teamRepository:ITeamRepository){}
    
            async execute(){    
                const teams = await this.teamRepository.getAllWithPoints();
    
                return teams;
            }
           }