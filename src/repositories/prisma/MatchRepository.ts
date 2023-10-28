import { ICreateMatchDTO, IMatchRepository } from "@repositories/IMatchRepository";
import { prisma } from ".";
import { IMatch } from "@models/Match";

export class MatchRepositoryPrisma implements IMatchRepository {
  private repository;

  constructor() {
    this.repository = prisma.matches;
  }

  async create(data: ICreateMatchDTO): Promise<IMatch> {
    const match = await this.repository.create({
      data: {
        start_time: data.start_time,
        end_time: data.end_time,
        teamA_id: data.teamA_id,
        teamB_id: data.teamB_id
      },
    });
    return match as IMatch;
  }
  }
