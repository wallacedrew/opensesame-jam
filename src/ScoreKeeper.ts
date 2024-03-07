export class ScoreKeeper {
  private teamAScore: number;

  constructor() {
    this.teamAScore = 0;
  }

  public getScore(): string {
    // format score with leading zeros
    // concat 2 scores with ':'

    return '000:000';
  }

  public scoreTeamA1(): void {
    this.teamAScore++;
  }
}
