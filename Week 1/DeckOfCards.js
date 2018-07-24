class DeckOfCards {
    constructor(){
        this.deck = []
    }
    makeDeck() {
        this.deck = []
        const cards = [["1","Ace"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","Jack"],["12","Queen"],["13","King"]];
        const suits = ["Diamonds","Hearts","Spades","Clubs"]

        for (const suit of suits){
            for(const card of cards){
                this.deck.push([`${card[0]}`, `${card[1]} of ${suit}`]);
            }
        }
        return this.deck;
    }
    reset(){
        var reset_Deck = new DeckOfCards();
        return reset_Deck.makeDeck()
    }
    shuffle(){
        var cards_left = this.deck.length, temp, index;

        // While there remain elements to shuffle…
        while (cards_left) {
            // Pick a remaining element in the array
            index = Math.floor(Math.random() * cards_left--);
        
            // And swap it with the current element that was just found
            temp = this.deck[cards_left];
            this.deck[cards_left] = this.deck[index];
            this.deck[index] = temp;
            // each iteration should push the shuffeled card to the back until they are all shuffled
        }
        return this;
    }

    deal() {
        return this.deck.pop();
    }
    showCard(index){
        console.log(`Card: ${this.deck[index][1]}`);
        console.log(`Value: ${this.deck[index][0]}`);
    return this;
    }
}

class Player extends DeckOfCards{
    constructor(name) {
        super(name);
        this.name = name;
        this.hand = [];
    }
    showCards(){
        console.log("Hand:");
        for(const cards of this.hand){
            console.log(`Card: ${cards[1]}`);
            console.log(`Value: ${cards[0]}`);
        }
        return this;
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

const deck1 = new DeckOfCards();
deck1.makeDeck();
deck1.showCard(5);

// const player2 = new Player("Ronnel");
// player2.draw(deck1).draw(deck1).showCards();
// console.log(player2.showCard(5));
// console.log(deck1);



