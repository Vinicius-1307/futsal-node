import { IMatch } from "@models/Match";

export interface ICreateMatchDTO {
  start_time: Date;
  end_time: Date;
  teamA_id: string;
  teamB_id: string;
}

export interface IMatchRepository{
  create(data: ICreateMatchDTO) : Promise<IMatch>;
  findById(match_id: string) : Promise<IMatch>;
  update(match: IMatch): Promise<void>;
  delete(match_id: string): Promise<void>;
}
