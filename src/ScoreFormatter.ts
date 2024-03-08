export class ScoreFormatter {
    public formatScore(score: number): string {
        if (score > 999) {
            score = score % 1000;
        }

        if (score > 99) {
            return `${score}`;
        } else if (score > 9) {
            return `0${score}`;
        }
        return `00${score}`;
    }
}
