export class ScoreFormatter {
    public formatScore(score: number): string {
        if (score > 9) {
            return `0${score}`;
        }
        return `00${score}`;
    }
}
