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

                const playerExist = await this.playerRepository.findById(player_id)

                if(!playerExist) throw new ApiError("Jogador não encontrado.");
            
                await this.playerRepository.delete(player_id)
                
                return;
            }
    
           }