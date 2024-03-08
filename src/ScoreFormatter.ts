export class ScoreFormatter {
    private readonly SCORE_LIMIT = 999;
    private readonly SCORE_LENGTH = 3;

    public format(score: number): string {
        score = this.resetAtLimit(score);
        return `${score}`.padStart(this.SCORE_LENGTH, '0');
    }

    private resetAtLimit(score: number) {
        if (this.scoreIsOverLimit(score)) {
            score = score % (this.SCORE_LIMIT + 1);
        }
        return score;
    }

    private scoreIsOverLimit(score: number) {
        return score > this.SCORE_LIMIT;
    }
}
