import { ICreateTeamDTO, ITeamRepository } from "@repositories/ITeamRepository";
import { prisma } from ".";
import { ITeam } from "@models/Team";

export class TeamRepositoryPrisma implements ITeamRepository {
  private repository;

  constructor() {
    this.repository = prisma.teams;
  }
  async findByName(name: string): Promise<ITeam> {
    const team = await this.repository.findUnique({
      where: {name},
    })
    return team as ITeam
  }
  async create(data: ICreateTeamDTO): Promise<ITeam> {
    const team = await this.repository.create({
      data: {
        name: data.name,
      },
    });

    return team as ITeam;
  }
}