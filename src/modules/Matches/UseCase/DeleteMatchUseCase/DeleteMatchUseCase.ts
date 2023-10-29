import { ApiError } from "@errors/ApiError";
import { IMatchRepository } from "@repositories/IMatchRepository";
import { inject, injectable } from "tsyringe";
    
export interface IDeleteMatchUseCaseData {
    match_id: string;
}
        @injectable()
        export class DeleteMatchUseCase {
            
            constructor(@inject("MatchRepository") private matchRepository:IMatchRepository){}
    
            async execute({match_id}: IDeleteMatchUseCaseData):Promise<void>{
    
                const match = await this.matchRepository.findById(match_id)

                if(!match) {
                    throw new ApiError("Partida não encontrado.");
                }

                await this.matchRepository.delete(match_id)
    
                return;
            }
    
           }