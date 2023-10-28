import { ICreatePlayerDTO, IPlayerRepository } from "@repositories/IPlayerRepository";
import { prisma } from ".";
import { IPlayer } from "@models/Player";

export class PlayerRepositoryPrisma implements IPlayerRepository {
  private repository;

  constructor() {
    this.repository = prisma.players;
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