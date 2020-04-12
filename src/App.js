import { Local }          from 'boardgame.io/multiplayer';
import { Client }         from 'boardgame.io/react';
import React              from 'react';
import './App.css';
import { TrachGameBoard } from './Board';
import { TrachGame }      from './Game';

const TrachGameClient = Client( {
    game       : TrachGame,
    numPlayers : 2,
    // loading: LoadingComponent,
    board      : TrachGameBoard,
    multiplayer: Local(),
    debug      : true,
} );

const App = () => (
    <div className = 'app'>
        <TrachGameClient playerID = "0" />
        <TrachGameClient playerID = "1" />
    </div>
);

export default App;
