function solution(command) {
    let commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let upvotes = this.upvotes;
            let downvotes = this.downvotes;
            let totalVotes = upvotes + downvotes;
            let balance = upvotes - downvotes;

            let inflation = totalVotes > 50
                ? Math.ceil(Math.max(upvotes, downvotes) * 0.25)
                : 0;

            let rating = null;

            if (upvotes / totalVotes > 0.66) {
                rating = "hot";
            } else if (downvotes / totalVotes < 0.67 && balance >= 0 && (upvotes > 100 || downvotes > 100)) {
                rating = "controversial";
            } else if (balance < 0) {
                rating = "unpopular";
            }

            if (!rating || totalVotes < 10) {
                rating = "new";
            }

            let result = [upvotes + inflation, downvotes + inflation, balance, rating];

            return result;
        }
    }

    return commands[command]();
}