export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  last_login?: Date;
}