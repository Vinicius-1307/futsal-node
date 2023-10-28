export interface IMatch {
  start_time: Date;
  end_time: Date;
  teamA_id: string;
  teamB_id: string;
  goalsTeamA: number;
  goalsTeamB: number;
  result: string;
}