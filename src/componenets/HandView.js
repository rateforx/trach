import React, { Component } from 'react';
import './HandView.css';
import Card                 from './CardView';

const spread = 60;

export default class Hand extends Component {

    render () {
        const count = this.props.cards.length;

        const cards = this.props.cards.map( ( card, i ) => {

            const angle = ( ( i + 1 ) - Math.ceil( count / 2 ) ) * spread / count;

            return <Card
                card = { card }
                key = { i }
                style = { {
                    transform : `translate(-50%, -50%) rotate(${ angle }deg)`,
                } }
            />;
        } );

        return (
            <div className = "hand">{ cards }</div>
        );
    }

}
