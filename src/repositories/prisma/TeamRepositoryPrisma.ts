import { ICreateTeamDTO, ITeamRepository, IUpdateTeamDTO } from "@repositories/ITeamRepository";
import { prisma } from ".";
import { ITeam } from "@models/Team";

export class TeamRepositoryPrisma implements ITeamRepository {
  private repository;

  constructor() {
    this.repository = prisma.teams;
  }

  async getAllWithPoints(): Promise<ITeam[]> {
    const teams = await this.repository.findMany({
      select: {
        name: true,
        goals: true,
        points: true
      },
      orderBy:{
        points: 'desc'
      }
    })
    return teams as ITeam[];
  }

  async getAll(): Promise<ITeam[]> {
    const teams = await this.repository.findMany({ 
      select: {
        name: true,
        Players: true
      }
    });
    return teams as unknown as ITeam[];
  }

  async update(team: ITeam): Promise<void> {
    await this.repository.update({
      where: { 
        id: team.id 
      },
    data: {
      name: team.name
    },
    }
    )
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
      },
      include: {
        Players: true
      }
    });
    return team as ITeam;
}

  async findByName(name: string): Promise<ITeam> {
    const team = await this.repository.findUnique({
      where: {name},
    })
    return team as unknown as ITeam
  }

  async create(data: ICreateTeamDTO): Promise<ITeam> {
    const team = await this.repository.create({
      data: {
        name: data.name,
      },
    });
    return team as unknown as ITeam;
  }
}