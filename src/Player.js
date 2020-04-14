import { PixiComponent } from '@inlet/react-pixi';
// import player =

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
        return undefined;
        // return Sprite.from();
    },
    applyProps () {},
} );
