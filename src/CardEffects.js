import Card from './Card';

/**
 *
 * @param game {Game}
 * @param context {Ctx}
 * @param dealer <Player>
 * @param damage
 * @param priority
 * @param target <{}>
 *     @param target.type <string>
 *     @param target.id <number>
 *     @param target.array <[]>
 */
function initAttack ( game, context, dealer, target, damage, priority ) {

    switch ( target.type ) {
        case 'Player':

            const targetPlayer = target.array[ target.id ];



            break;

        case 'Card':

            break;

    }

}

function attackEffect( game, context,) {

}
