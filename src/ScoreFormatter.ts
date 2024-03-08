export class ScoreFormatter {
    private readonly SCORE_LIMIT = 999;
    private readonly SCORE_LENGTH = 3;

    public format(score: number): string {
        if (this.scoreIsOverLimit(score)) {
            score = this.resetAtLimit(score);
        }
        return `${score}`.padStart(this.SCORE_LENGTH, '0');
    }

    private resetAtLimit(score: number): number {
        return score % (this.SCORE_LIMIT + 1);
    }

    private scoreIsOverLimit(score: number) {
        return score > this.SCORE_LIMIT;
    }
}
