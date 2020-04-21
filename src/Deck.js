import Card from './Card';
import { base }        from './deck.json';

export default class Deck {

    cards = [];

    constructor () {
        // todo use game config to pick the right decks
        for ( let cardDefinition of base ) {
            let options = { ...cardDefinition };
            delete options.count;
            this.cards = [
                ...this.cards,
                ...Array( cardDefinition.count ).fill( new Card( options ) ),
            ];
        }
    }
}

