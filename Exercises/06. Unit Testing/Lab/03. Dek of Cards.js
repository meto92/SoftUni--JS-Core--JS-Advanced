function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ["2", "3", '4', "5", "6", '7', "8", "9", "10", "J", "Q", "K", "A"];
        const validSuits = ["S", "H", "D", "C"];
    
        if(!validFaces.includes(face)) {
            throw new Error(`Invalid face: ${face}`);
        }
    
        if (!validSuits.includes(suit)) {
            throw new Error(`Invalid suit: ${suit}`);
        }
    
        let suitsUnicodes = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        }
    
        return {
            suit,
            face,
            toString: () => `${face}${suitsUnicodes[suit]}`
        }
    }

    let deck = [];

    try {
        cards.forEach(card => {
            let face = card.substring(0, card.length - 1);
            let suit = card[card.length - 1];

            try {
                let card = createCard(face, suit);

                deck.push(card);
            } catch (ex) {
                throw new Error(`Invalid card: ${face}${suit}`);
            }
        });

        console.log(deck.join(" "));
    } catch (ex) {
        console.log(ex.message);
    }
}