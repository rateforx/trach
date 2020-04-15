
import { PixiComponent, Sprite } from '@inlet/react-pixi';

export default class Player {
    id          = '';
    name        = 'Player';
    health      = 5;
    healthLimit = 5;
    hand        = [];
    cardLimit   = 5;
    table       = [];

    constructor ( id, name, health, hand, cardLimit ) {
        this.id = id;
    }
}

export const PixiPlayer = PixiComponent( 'PixiPlayer', {

    create ( props ) {

    },
    applyProps () {},
} );
