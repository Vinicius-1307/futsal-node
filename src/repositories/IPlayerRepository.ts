import { IPlayer } from "@models/Player";

export interface ICreatePlayerDTO{
  name: string;
  shirt_number: number;
  team_id: string;
}

export interface IUpdatePlayerDTO{
  name: string;
  shirt_number: number;
  team_id: string;
  player_id: string;
}

export interface IPlayerRepository{
  create(data: ICreatePlayerDTO) : Promise<IPlayer>;
  update(data: IUpdatePlayerDTO) : Promise<IPlayer>;
  findByShirtNumber(team_id: string, shirt_number: number) : Promise<IPlayer>
  findById(player_id: string): Promise<IPlayer>;
  delete(player_id: string): Promise<void>;
}