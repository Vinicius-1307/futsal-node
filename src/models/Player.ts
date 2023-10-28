import { ITeam } from "./Team";

export interface IPlayer {
  id: string;
  name: string;
  shirt_number: number;
  team_id: string;
  team: ITeam;
}