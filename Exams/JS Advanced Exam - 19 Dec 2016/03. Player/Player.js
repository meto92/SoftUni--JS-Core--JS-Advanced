class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score) {
        const scoreAsNumber = +score;
        
        if (score !== null && !Number.isNaN(scoreAsNumber)) {
            this.scores.push(scoreAsNumber);
        }

        return this;
    }

    sortScoresDescending() {
        this.scores.sort((a, b) => b - a);
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        if (!this.scoreCount) {
            return undefined;
        }
        
        return Math.max.apply(null, this.scores);
    }

    get topFiveScore() {
        this.sortScoresDescending();

        return this.scores.slice(0, 5);
    }

    toString() {
        this.sortScoresDescending();

        const result = `${this.nickName}: [${this.scores.join(",")}]`;

        return result;
    }
}