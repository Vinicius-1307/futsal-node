import { ITeam } from "@models/Team";

export interface ICreateTeamDTO {
  name: string,
}

export interface ITeamRepository {
  create(data: ICreateTeamDTO) : Promise<ITeam>;
  findByName(name: string) : Promise<ITeam>;
}