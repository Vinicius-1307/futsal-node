import { ICreateTeamDTO, ITeamRepository, IUpdateTeamDTO } from "@repositories/ITeamRepository";
import { prisma } from ".";
import { ITeam } from "@models/Team";

export class TeamRepositoryPrisma implements ITeamRepository {
  private repository;

  constructor() {
    this.repository = prisma.teams;
  }

  async delete(team_id: string): Promise<void> {
    await this.repository.delete({ where: { id: team_id } })
    return;
  }

  async updateTeam({
    team_id, 
    name
  }: IUpdateTeamDTO): Promise<void> {
    await this.repository.update({
      where: { 
        id: team_id,
      },
      data: {
        name: name,
      },
    })
  }

  async findById(team_id: string): Promise<ITeam> {
    const team = await this.repository.findFirst({ 
      where: { 
        id: team_id 
      } });

    return team as ITeam;
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