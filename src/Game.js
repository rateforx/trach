// import { PlayerView } from 'boardgame.io/core';
import { Game } from 'boardgame.io/internal';
import Deck     from './Deck';
import Player   from './Player';

export const TrachGame = Game( {

    name: 'trach-game',

    setup: context => {
        let deck      = Deck.getShuffledDeck();
        let players   = [];
        let discarded = [];
        let stack     = [];

        for ( let i = 0; i < context.numPlayers; i++ ) {
            players.push( new Player( i.toString() ) );
        }

        for ( let player of players ) {
            player.hand = deck.splice( -5, 5 );
        }

        return {
            secret: {
                deck,
                discarded,
            },
            players,
            stack,
        };
    },

    playerView: ( game, context, playerID ) => {
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

    moves: {

        playCards( game, context, cards ) {
            for ( let card of cards ) {
                card.use()
            }
        },

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
} );
