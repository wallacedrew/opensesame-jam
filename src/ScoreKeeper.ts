import {ScoreFormatter} from './ScoreFormatter';

class Team {
    private teamScore;

    constructor() {
        this.teamScore = 0;
    }

    public foulShot(): void {
        this.teamScore += 1;
    }

    public layUp(): void {
        this.teamScore += 2;
    }

    public threePointer(): void {
        this.teamScore += 3;
    }

    public score(): number {
        return this.teamScore;
    }
}

export class ScoreKeeper {
    private teamAScore: number;
    private teamA: Team;
    private teamBScore: number;

    constructor() {
        this.teamAScore = 0;
        this.teamA = new Team();
        this.teamBScore = 0;
    }

    public getScore(): string {
        const formatter = new ScoreFormatter();
        const scoreA = formatter.formatScore(this.teamA.score());
        const scoreB = formatter.formatScore(this.teamBScore);
        return `${scoreA}:${scoreB}`;
    }

    public scoreTeamA1(): void {
        this.teamAScore = this.foulShot(this.teamAScore);
        this.teamA.foulShot();
    }

    public scoreTeamA2(): void {
        this.teamAScore = this.layUp(this.teamAScore);
        this.teamA.layUp();
    }

    public scoreTeamA3(): void {
        this.teamAScore = this.three(this.teamAScore);
        this.teamA.threePointer();
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

    private layUp(value: number): number {
        return value += 2;
    }

    private three(value: number): number {
        return value += 3;
    }

}
