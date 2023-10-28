import { ITeam } from "@models/Team";

export interface ICreateTeamDTO {
  name: string,
}
export interface IUpdateTeamDTO {
  team_id: string,
  name: string,
}

export interface ITeamRepository {
  create(data: ICreateTeamDTO) : Promise<ITeam>;
  findByName(name: string) : Promise<ITeam>;
  findById(team_id: string): Promise<ITeam>;
  updateTeam(data: IUpdateTeamDTO) : Promise<void>;
  delete(team_id: string): Promise<void>;
}