import { IPlayer } from "./Player";

export interface ITeam {
  id: string;
  name: string;
  points: number;
  goals: number;
  Players: IPlayer[];
}