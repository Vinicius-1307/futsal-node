import { IUser } from "@models/User";
import { ICreateUserDTO, IUserRepository } from "@repositories/IUserRepository";
import { prisma } from ".";

export class UserRepositoryPrisma implements IUserRepository {
  private repository;

  constructor() {
    this.repository = prisma.users;
  }
  async updateLogin(user_id: string): Promise<void> {
    await this.repository.update({
      where: {
        id: user_id,
      }, 
      data: {
        
      }
    })
    return;
  }

  delete(user_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  async findById(user_id: string): Promise<IUser> {
    const user = await this.repository.findFirst({
      where: {
        id: user_id,
      }
    })

    return user as IUser;
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