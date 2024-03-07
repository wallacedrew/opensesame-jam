import {ScoreFormatter} from './ScoreFormatter';

export class ScoreKeeper {
    private teamAScore: number;
    private teamBScore: number;

    constructor() {
        this.teamAScore = 0;
        this.teamBScore = 0;
    }

    public getScore(): string {
        const formatter = new ScoreFormatter();
        const scoreA = formatter.formatScore(this.teamAScore);
        const scoreB = formatter.formatScore(this.teamBScore);
        return `${scoreA}:${scoreB}`;
    }

    public scoreTeamA1(): void {
        this.teamAScore++;
    }

    public scoreTeamA2(): void {
        this.teamAScore += 2;
    }

    public scoreTeamB1(): void {
        this.teamBScore++;
    }
}
