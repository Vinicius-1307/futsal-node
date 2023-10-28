import { ICreatePlayerDTO, IPlayerRepository, IUpdatePlayerDTO } from "@repositories/IPlayerRepository";
import { prisma } from ".";
import { IPlayer } from "@models/Player";

export class PlayerRepositoryPrisma implements IPlayerRepository {
  private repository;

  constructor() {
    this.repository = prisma.players;
  }

  async update({name, shirt_number, team_id, player_id}: IUpdatePlayerDTO): Promise<IPlayer> {
    const player = await this.repository.update({
      where: { 
        id: player_id,
      },
      data: {
        name: name,
        shirt_number: shirt_number,
        team_id: team_id
      },
    });
    return player as IPlayer;
  }

  async findByShirtNumber(team_id: string, shirt_number: number): Promise<IPlayer> {
      const player = await this.repository.findFirst({
      where: {
        team_id: team_id,
        shirt_number: shirt_number,
      },
    });
    return player as IPlayer;
  }

  async create({name, shirt_number, team_id}: ICreatePlayerDTO): Promise<IPlayer> {
    const player = await this.repository.create({
      data: {
        name: name,
        shirt_number: shirt_number,
        team_id: team_id
      },
    });
    return player as IPlayer;
  }
}