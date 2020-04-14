import Card from './Card';

import attack from './assets/img/cards/attack.jpg';
import brick from './assets/img/cards/brick.jpg';
import defense from './assets/img/cards/defense.jpg';
import deflection from './assets/img/cards/deflection.jpg';
import freeze from './assets/img/cards/freeze.jpg';
import globalisation from './assets/img/cards/globalisation.jpg';
import healing from './assets/img/cards/healing.jpg';
import massiveAttack from './assets/img/cards/massiveAttack.jpg';
import nuclearButton from './assets/img/cards/nuclearButton.jpg';
import piercing from './assets/img/cards/piercing.jpg';
import resurrection from './assets/img/cards/resurrection.jpg';
import shelter from './assets/img/cards/shelter.jpg';
import transfer from './assets/img/cards/transfer.jpg';

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
        ...Array( 15 ).fill( new Card( 'Attack', attack ) ),
        ...Array( 5 ).fill( new Card( 'Brick', brick ) ),
        ...Array( 5 ).fill( new Card( 'Defense', defense ) ),
        ...Array( 5 ).fill( new Card( 'Deflection', deflection ) ),
        ...Array( 5 ).fill( new Card( 'Freeze', freeze ) ),
        ...Array( 2 ).fill( new Card( 'Globalisation', globalisation ) ),
        ...Array( 5 ).fill( new Card( 'Healing', healing ) ),
        ...Array( 5 ).fill( new Card( 'Massive Attack', massiveAttack ) ),
        ...Array( 2 ).fill( new Card( 'Nuclear Button', nuclearButton ) ),
        ...Array( 5 ).fill( new Card( 'Piercing', piercing ) ),
        ...Array( 1 ).fill( new Card( 'Resurrection', resurrection ) ),
        ...Array( 5 ).fill( new Card( 'Shelter', shelter ) ),
        ...Array( 5 ).fill( new Card( 'Transfer', transfer ) ),
    ];

    /**
     *
     * @return []
     */
    static getShuffledDeck() {
        return shuffle( this.cards.slice( 0, this.cards.length - 1 ) );
    }

}
