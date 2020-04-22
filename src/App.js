import { Local }          from 'boardgame.io/multiplayer';
import { Client }         from 'boardgame.io/react';
import React              from 'react';
import './App.css';
import { TrachGameBoard } from './componenets/BoardView';
import { TrachGame }      from './Game';

const TrachGameClientDebug = Client( {
    game        : TrachGame,
    numPlayers  : 1,
    // loading: LoadingComponent,
    board       : TrachGameBoard,
    multiplayer : Local(),
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
            <span style = { {
                display  : 'block',
                position : 'absolute',
            } }> Client#0 - Debug</span>
        <TrachGameClientDebug playerID = "0"/>
    </div>
);

export default App;
