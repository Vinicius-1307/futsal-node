import { IUser } from "@models/User";

export interface ICreateUserDTO {
  name: string,
  email: string;
  password: string;
}

export interface IUserRepository {
  create(data: ICreateUserDTO) : Promise<IUser>;
  findByEmail(user_email: string): Promise<IUser>;
  findById(user_id: string): Promise<IUser>;
  updateLogin(user_id: string): Promise<void>;
  delete(user_id: string): Promise<void>;
}