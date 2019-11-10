function cardDeckBuilder(selector) {
    let $container = $(selector);
    
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9" , "10", "J", "Q", "K", "A"];
    
    const suits = {
        C: "\u2663",
        D: "\u2666",
        H: "\u2665",
        S: "\u2660"
    };
    
    function addCard(face, suit) {
        if (!validFaces.includes(face)) {
            throw new Error(`Invalid face: ${face}`);
        }
        
        if (!suits[suit]) {
            throw new Error(`Invalid suit: ${suit}`);
        }
        
        $("<div>").addClass("card")
            .text(`${face} ${suits[suit]}`)
            .click(() => {					
                //$container.append($container.children(".card").toArray().reverse());
                
                let $cards = $container.children(".card");
                
                $cards.slice(0, $cards.length / 2).each((index, card) => {
                    let currentText = card.textContent;
                    let $other = $($cards[$cards.length - index - 1]);
                    
                    $(card).text($other.text());
                    $other.text(currentText);
                });
            })
            .appendTo($container);
    }
    
    return {
        addCard
    };
}