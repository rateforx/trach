import Card from './Card';

// export const deck = [
//     ...new Array( 15 ).fill( new Card( 'Attack' ) ),
//     ...new Array( 2 ).fill( new Card( 'Nuclear Button' ) ),
//     ...new Array( 2 ).fill( new Card( 'Globalisation' ) ),
//     ...new Array( 5 ).fill( new Card( 'Defense' ) ),
//     ...new Array( 5 ).fill( new Card( 'Deflect' ) ),
//     ...new Array( 5 ).fill( new Card( 'Piercing' ) ),
//     ...new Array( 5 ).fill( new Card( 'Transfer' ) ),
//     ...new Array( 5 ).fill( new Card( 'Brick' ) ),
//     ...new Array( 5 ).fill( new Card( 'Shelter' ) ),
//     ...new Array( 5 ).fill( new Card( 'Healing' ) ),
//     ...new Array( 1 ).fill( new Card( 'Resurrection' ) ),
//     ...new Array( 5 ).fill( new Card( 'Freeze' ) ),
//     ...new Array( 5 ).fill( new Card( 'Massive Attack' ) ),
// ];

/**
 *
 * @param a
 * @return {*}
 */
function shuffle( a ) {
    let j, x, i;
    for ( i = a.length - 1; i > 0; i-- ) {
        j      = Math.floor( Math.random() * ( i + 1 ) );
        x      = a[ i ];
        a[ i ] = a[ j ];
        a[ j ] = x;
    }
    return a;
}

export default class Deck {

    static cards = [
        ...new Array( 15 ).fill( new Card( 'Attack' ) ),
        ...new Array( 2 ).fill( new Card( 'Nuclear Button' ) ),
        ...new Array( 2 ).fill( new Card( 'Globalisation' ) ),
        ...new Array( 5 ).fill( new Card( 'Defense' ) ),
        ...new Array( 5 ).fill( new Card( 'Deflection' ) ),
        ...new Array( 5 ).fill( new Card( 'Piercing' ) ),
        ...new Array( 5 ).fill( new Card( 'Transfer' ) ),
        ...new Array( 5 ).fill( new Card( 'Brick' ) ),
        ...new Array( 5 ).fill( new Card( 'Shelter' ) ),
        ...new Array( 5 ).fill( new Card( 'Healing' ) ),
        ...new Array( 1 ).fill( new Card( 'Resurrection' ) ),
        ...new Array( 5 ).fill( new Card( 'Freeze' ) ),
        ...new Array( 5 ).fill( new Card( 'Massive Attack' ) ),
    ];

    /**
     *
     * @return []
     */
    static getShuffledDeck() {
        return shuffle( this.cards.slice( 0, this.cards.length - 1 ) );
    }

}
