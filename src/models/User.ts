export interface IUser {
  id: string;
  email: string;
  password?: string;
  last_login?: Date;
}