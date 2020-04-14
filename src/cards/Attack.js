import { instanceOf } from 'prop-types';
import Card           from '../Card';

export default class Attack extends Card {


    target = undefined;

    constructor ( name, image, type ) {
        super( name, image );
    }


    use () {
        switch ( true ) {
            case this.target instanceof Card:
                this.card
        }
    }
}
