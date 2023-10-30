import { Teams } from "@prisma/client";
import { ITeam } from "./Team";

export interface IMatch {
  id: string;
  start_time: Date;
  end_time: Date;
  teamA_id: string;
  teamB_id: string;
  goalsTeamA: number;
  goalsTeamB: number;
  result: string;
}

export class Match {
  constructor(
      public goalsTeamA: number,
      public goalsTeamB: number,
      public result: "TeamA" | "TeamB" | "Empate",
      public teamA: ITeam,
      public teamB: ITeam
  ) {
      this.updatePointsAndGoals();
  }

  private updatePointsAndGoals() {
      this.teamA.points = 0;
      this.teamB.points = 0;
      this.teamA.goals = 0;
      this.teamB.goals = 0;

      // Atualiza os pontos e gols com base no resultado.
      switch (this.result) {
          case "TeamA":
              this.teamA.points = 3;
              break;
          case "TeamB":
              this.teamB.points = 3;
              break;
          case "Empate":
              this.teamA.points = 1;
              this.teamB.points = 1;
              break;
      }
      this.teamA.goals += this.goalsTeamA;
      this.teamB.goals += this.goalsTeamB;
    }
}