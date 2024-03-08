import {ScoreFormatter} from './ScoreFormatter';

export class ScoreKeeper {
    private teamA: Team;
    private teamB: Team;

    constructor() {
        this.teamA = new Team();
        this.teamB = new Team();
    }

    public getScore(): string {
        const formatter = new ScoreFormatter();
        const scoreA = formatter.formatScore(this.teamA.score());
        const scoreB = formatter.formatScore(this.teamB.score());
        return `${scoreA}:${scoreB}`;
    }

    public scoreTeamA1(): void {
        this.teamA.foulShot();
    }

    public scoreTeamA2(): void {
        this.teamA.layUp();
    }

    public scoreTeamA3(): void {
        this.teamA.threePointer();
    }

    public scoreTeamB1(): void {
        this.teamB.foulShot();
    }

    public scoreTeamB2(): void {
        this.teamB.layUp();
    }

    public scoreTeamB3(): void {
        this.teamB.threePointer();
    }

}

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
