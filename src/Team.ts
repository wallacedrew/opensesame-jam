export class Team {
    private teamScore;

    constructor() {
        this.teamScore = 0;
    }

    public foulShot(): void {
        this.scorePlus(1);
    }

    public layUp(): void {
        this.scorePlus(2);
    }

    public threePointer(): void {
        this.scorePlus(3);
    }

    public score(): number {
        return this.teamScore;
    }

    private scorePlus(amount: number) {
        this.teamScore += amount;
    }
}
