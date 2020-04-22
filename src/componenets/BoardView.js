import React, { Component } from 'react';
import './BoardView.css';
import Deck                 from './DeckView';
import Discarded            from './DiscardedView';
import Hand                 from './HandView';
import Stack                from './StackView';
import { GameContext }      from '../GameContext';


export class TrachGameBoard extends Component {

    render () {
        return (
            <GameContext.Provider value = { {
                game    : this.props.G,
                context : this.props.ctx,
            } }>
                <div className = 'game'>
                    <div className = 'stacks'>
                        <Deck deck = { this.props.G.secret.deck }/>
                        <Stack cards = { this.props.G.stack }/>
                        <Discarded cards = { this.props.G.secret.discarded.slice( -20, 20 ) }/>
                    </div>
                    <Hand cards = { this.props.G.players[ this.props.playerID ].hand }/>
                </div>
            </GameContext.Provider>
        );
    }
}
