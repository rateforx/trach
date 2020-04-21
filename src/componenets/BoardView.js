import React, { Component } from 'react';
import './BoardView.less';
import Hand from './HandView';


export class TrachGameBoard extends Component {

    render () {
        return (
            <div className = 'game'>
                <Hand cards = { this.props.G.players[ this.props.playerID ].hand }/>
            </div>
        );
    }
}
