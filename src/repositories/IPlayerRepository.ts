import { IPlayer } from "@models/Player";

export interface ICreatePlayerDTO{
  name: string;
  shirt_number: number;
  team_id: string;
}

export interface IPlayerRepository{
  create(data: ICreatePlayerDTO) : Promise<IPlayer>;
  findByShirtNumber(team_id: string, shirt_number: number) : Promise<IPlayer>
}