import {ScoreFormatter} from './ScoreFormatter';
import {Team} from './Team';

export class ScoreKeeper {
    private teamA: Team;
    private teamB: Team;

    constructor() {
        this.teamA = new Team();
        this.teamB = new Team();
    }

    public getScore(): string {
        const formatter = new ScoreFormatter();
        const scoreA = formatter.format(this.teamA.score());
        const scoreB = formatter.format(this.teamB.score());
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
