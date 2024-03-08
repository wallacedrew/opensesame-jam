export class ScoreFormatter {
    public formatScore(score: number): string {
        if (score > 999) {
            score = score % 1000;
        }
        return `${score}`.padStart(3, '0');
    }
}
