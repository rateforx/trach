import React, { Component } from 'react';
import { CardReverse }      from './CardView';
import './DeckView.css';
import { GameContext } from '../GameContext';

export default class Deck extends Component {

    render () {
        return (
            // <GameContext.Consumer>
                <div className = "deck"
                     onClick = { () => {
                         console.log( `drawing card!` );
                         this.context.game.moves.drawCard( this.context.game, this.context.context );
                     } }
                >
                    <CardReverse/>
                    <CardReverse style = { {
                        transform : `translate(-5px,-5px)`,
                    } }/>
                    <CardReverse style = { {
                        transform : `translate(-10px,-10px)`,
                    } }/>
                    <CardReverse style = { {
                        transform : `translate(-15px,-15px)`,
                    } }/>
                    <CardReverse style = { {
                        transform : `translate(-20px,-20px)`,
                    } }/>
                </div>
            // </GameContext.Consumer>
        );
    }
}
