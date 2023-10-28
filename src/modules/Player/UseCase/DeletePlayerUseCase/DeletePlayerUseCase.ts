import { ApiError } from "@errors/ApiError";
import { IPlayerRepository } from "@repositories/IPlayerRepository";
import { inject, injectable } from "tsyringe";
    
export interface IDeletePlayerUseCaseData {
    player_id: string;
}
        @injectable()
        export class DeletePlayerUseCase {
            
            constructor(@inject("PlayerRepository") private playerRepository:IPlayerRepository){}
    
            async execute({player_id}: IDeletePlayerUseCaseData):Promise<void> {

                const player = await this.playerRepository.findById(player_id)

                if(!player) {
                    throw new ApiError("Time não encontrado.");
                }

                await this.playerRepository.delete(player_id)
                
                return;
            }
    
           }