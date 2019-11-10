class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if (!["livingRoom", "bedRoom", "closet"].includes(room)) {
            throw new Error(`Cannot have book shelf in ${room}`);
        }

        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
        }
        
        this.shelf.push({
            bookName,
            bookAuthor,
            genre
        });
    
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf
            .filter(b => b.bookName !== bookName);
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":`;

        this.shelf
            .filter(b => b.genre === genre)
            .forEach(b => {
                result += `\n\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`;
            });
            
        return result;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    toString() {
        if (!this.shelf.length) {
            return "It's an empty shelf";
        }

        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:`;

        this.shelf.forEach(b => {
            result += `\n\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`;
        });

        return result;
    }
}