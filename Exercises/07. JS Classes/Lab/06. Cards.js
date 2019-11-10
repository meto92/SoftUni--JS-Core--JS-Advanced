(function() {
    const Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    };

    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this._face = null;
            this._suit = null;
            
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!validFaces.includes(value)) {
                throw new Error(`Invalid suit: ${value}.`);
            }
            
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.values(Suits).includes(value)) {
                throw new Error(`Invalid suit: ${value}`);
            }

            this._suit = value;
        }
    }

    return {
        Suits,
        Card
    }
})();