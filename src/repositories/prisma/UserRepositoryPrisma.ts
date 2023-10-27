import { IUser } from "@models/User";
import { ICreateUserDTO, IUserRepository } from "@repositories/IUserRepository";
import { prisma } from ".";

export class UserRepositoryPrisma implements IUserRepository {
  private repository;

  constructor() {
    this.repository = prisma.users;
  }
 
  async findByEmail(user_email: string): Promise<IUser> {
    const user = await this.repository.findFirst({
      where: {
        email: user_email,
      },
    });

    return user as IUser;
  }

  async create(data: ICreateUserDTO): Promise<IUser> {
    const user = await this.repository.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return user as IUser;
  }
  
}