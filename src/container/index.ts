import { IMatchRepository } from "@repositories/IMatchRepository";
import { IPlayerRepository } from "@repositories/IPlayerRepository";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { IUserRepository } from "@repositories/IUserRepository";
import { MatchRepositoryPrisma } from "@repositories/prisma/MatchRepository";
import { PlayerRepositoryPrisma } from "@repositories/prisma/PlayerRepositoryPrisma";
import { TeamRepositoryPrisma } from "@repositories/prisma/TeamRepositoryPrisma";
import { UserRepositoryPrisma } from "@repositories/prisma/UserRepositoryPrisma";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>('UserRepository', UserRepositoryPrisma);
container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepositoryPrisma);
container.registerSingleton<IPlayerRepository>('PlayerRepository', PlayerRepositoryPrisma);
container.registerSingleton<IMatchRepository>('MatchRepository', MatchRepositoryPrisma);