import { IMatchRepository } from "@repositories/IMatchRepository";
import { IPlayerRepository } from "@repositories/IPlayerRepository";
import { ITeamRepository } from "@repositories/ITeamRepository";
import { IUserRepository } from "@repositories/IUserRepository";
import { MatchRepositoryPrisma } from "@repositories/implementations/prisma/MatchRepository";
import { PlayerRepositoryPrisma } from "@repositories/implementations/prisma/PlayerRepositoryPrisma";
import { TeamRepositoryPrisma } from "@repositories/implementations/prisma/TeamRepositoryPrisma";
import { UserRepositoryPrisma } from "@repositories/implementations/prisma/UserRepositoryPrisma";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>('UserRepository', UserRepositoryPrisma);
container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepositoryPrisma);
container.registerSingleton<IPlayerRepository>('PlayerRepository', PlayerRepositoryPrisma);
container.registerSingleton<IMatchRepository>('MatchRepository', MatchRepositoryPrisma);