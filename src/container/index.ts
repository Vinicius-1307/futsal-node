import { IUserRepository } from "@repositories/IUserRepository";
import { UserRepositoryPrisma } from "@repositories/prisma/UserRepositoryPrisma";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>('UserRepository', UserRepositoryPrisma)