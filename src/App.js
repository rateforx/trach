import { Local }          from 'boardgame.io/multiplayer';
import { Client }         from 'boardgame.io/react';
import React              from 'react';
import './App.css';
import { TrachGameBoard } from './componenets/BoardView';
import { TrachGame }      from './Game';
import PixiBoard          from './PixiBoard';

const TrachGameClientDebug = Client( {
    game        : TrachGame,
    numPlayers  : 1,
    // loading: LoadingComponent,
    board       : TrachGameBoard,
    multiplayer : false,
    debug       : true,
} );

// const TrachGameClient = Client( {
//     game       : TrachGame,
//     numPlayers : 4,
//     // loading: LoadingComponent,
//     board      : PixiBoard,
//     multiplayer: Local(),
//     debug      : false,
// } );

const App = () => (
    <div className = 'app'>
        <div>
            <span style = { {
                display  : 'block',
                position : 'absolute',
            } }> Client#0 - Debug</span>
            <TrachGameClientDebug playerID = "0"/>
        </div>
        {/*<div>Client#1<TrachGameClient playerID = "1"/></div>*/ }
        {/*<div>Client#2<TrachGameClient playerID = "2"/></div>*/ }
        {/*<div>Client#3<TrachGameClient playerID = "3"/></div>*/ }
    </div>
);

export default App;
