import Deck        from './Deck';
import Player      from './Player';
import { shuffle } from './utils';

function drawCard ( game, context, playerID ) {
    game.players[ playerID ].hand.unshift( game.secret.deck.pop() );
    if ( game.secret.deck.length === 0 ) {
        reshuffleDeck( game );
    }
}

function reshuffleDeck ( game ) {
    // todo possible that there is less than 20 discarded cards
    game.secret.deck.push(
        shuffle(
            game.secret.discarded.splice( 0, game.secret.discarded.length - 20 ),
        ),
    );
}

function discardCard ( game, context, card ) {
    // card.onDiscard();
}

export const TrachGame = {

    name : 'trach-game',

    setup : context => {

        const deck      = shuffle( new Deck().cards );
        const players   = {};
        const discarded = [];
        const stack     = [];

        for ( let i = 0; i < context.numPlayers; i++ ) {
            players[ i ]      = new Player( i.toString() );
            players[ i ].hand = deck.splice( -5, 5 );
        }

        return {
            secret : {
                deck,
                discarded,
            },
            players,
            stack,
        };
    },

    playerView : ( game, context, playerID ) => {
        return game;
        // let r = { ...game };
        // delete r.secret;
        // r.players
        //     .filter( player => player.id !== playerID )
        //     .map( player => {
        //         player.hand = [];
        //         return player;
        //     } )
        // ;
        // return r;
    },
    // playerView: PlayerView.STRIP_SECRETS,

    moves : {

        playCard ( game, context, card ) {
            const dealersHand = game.players[ context.currentPlayer ].hand;
            dealersHand.splice( dealersHand.indexOf( card ), 1 );
            game.stack.push( card );

            context.events.setActivePlayers( {
                all    : 'response',
                revert : true,
            } );
        },

        playCards ( game, context, cards ) {
            context.events.setActivePlayers( {
                all    : 'response',
                revert : true,

            } );
            for ( let card of cards ) {

            }
        },

        skipTurnAndExchangeCards ( game, context, cards ) {
            console.log( `skip and exchange test` );
        },

        stackCardTest ( game, context ) {
            game.stack.push(
                game.players[ context.currentPlayer ].hand.pop(),
            );
        },

        discardCardTest ( game, context ) {
            game.secret.discarded.push(
                game.players[ context.currentPlayer ].hand.pop(),
            );
        },

        emptyDiscardedTest ( game, context ) {
            game.secret.discarded = [];
        },

        drawCard ( game, context ) {
            drawCard( game, context, context.currentPlayer );
        },
    },

    turn : {

        stages : {
            response : {
                moves : {
                    respondWithCards : ( game, context, cards ) => {},
                },
            },
        },

        onBegin : ( game, context ) => {},

        onEnd : ( game, context ) => {},

        endIf : ( game, context ) => {},

        onMove : ( game, context ) => {},

        moveLimit : 1,
    },

    phases : {
        responsePhase : {

            onBegin : ( game, context ) => {},

            onEnd : ( game, context ) => {},
        },
    },
};
