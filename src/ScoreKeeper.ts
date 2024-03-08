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
        this.teamAScore = this.foulShot(this.teamAScore);
    }

    public scoreTeamA2(): void {
        this.teamAScore = this.layUp(this.teamAScore);
    }

    public scoreTeamA3(): void {
        this.teamAScore = this.three(this.teamAScore);
    }

    public scoreTeamB1(): void {
        this.teamBScore = this.foulShot(this.teamBScore);
    }

    public scoreTeamB2(): void {
        this.teamBScore = this.layUp(this.teamBScore);
    }

    public scoreTeamB3(): void {
        this.teamBScore = this.three(this.teamBScore);
    }

    private foulShot(value: number): number {
        return value += 1;
    }

    private layUp(value: number) {
        return value += 2;
    }

    private three(value: number): number {
        return value += 3;
    }

}
