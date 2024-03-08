export class Team {
    private teamScore;

    constructor() {
        this.teamScore = 0;
    }

    public foulShot(): void {
        this.incrementBy(1);
    }

    public layUp(): void {
        this.incrementBy(2);
    }

    public threePointer(): void {
        this.incrementBy(3);
    }

    public score(): number {
        return this.teamScore;
    }

    private incrementBy(amount: number) {
        this.teamScore += amount;
    }
}
