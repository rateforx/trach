import Deck   from './Deck';
import Player from './Player';

export const TrachGame = {

    name: 'trach-game',

    setup: context => {
        let deck      = Deck.getShuffledDeck();
        let players   = new Array( context.numPlayers ).fill( new Player() );
        let discarded = [];

        for ( let player of players ) {
            player.hand = deck.splice( -5, 5 );
        }

        return { deck, players, discarded };
    },

    moves: {

        playCards( game, context, cards ) {},

        skipTurnAndExchangeCards( game, context, cards ) {},

    },

    turn: {

        onBegin: ( game, context ) => {},

        onEnd: ( game, context ) => {},

        endIf: ( game, context ) => {},

        onMove: ( game, context ) => {},

        moveLimit: 1,
    },

    phases: {
        responsePhase: {

            onBegin: ( game, context ) => {},

            onEnd: ( game, context ) => {},

            moves: {
                respondWithCards: ( game, context, cards ) => {},
            },

        },
    },
};
