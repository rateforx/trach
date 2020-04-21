import { PixiComponent, Sprite } from '@inlet/react-pixi';

export default class Player {

    static type = 'Player';

    id          = '';
    name        = 'Player Name';
    health      = 5;
    healthLimit = 5;
    hand        = [];
    cardLimit   = 5;
    table       = [];

    constructor ( id, name, health, hand, cardLimit ) {
        // todo move initial values and limits to config
        this.id = id;
    }

    dealDamage ( game, context, priority, damage ) {
        const freezeCard = this.table.find( ( { code } ) => code === 'freeze' );
        // if no Freeze card on the table, or the attack has a higher priority
        if ( !( freezeCard && freezeCard.priority < priority ) ) {
            // take damage
            this.health -= damage;
        }
    }

    die ( game, context ) {}
}

export const PixiPlayer = PixiComponent( 'PixiPlayer', {

    create ( props ) {

    },
    applyProps () {},
} );
