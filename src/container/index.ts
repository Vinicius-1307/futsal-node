import { ITeamRepository } from "@repositories/ITeamRepository";
import { IUserRepository } from "@repositories/IUserRepository";
import { TeamRepositoryPrisma } from "@repositories/prisma/TeamRepositoryPrisma";
import { UserRepositoryPrisma } from "@repositories/prisma/UserRepositoryPrisma";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>('UserRepository', UserRepositoryPrisma);
container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepositoryPrisma);