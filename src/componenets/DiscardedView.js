import React, { Component } from 'react';
import './DiscardedView.css';
import Card                 from './CardView';

export default class Discarded extends Component {

    render () {
        const cards = this.props.cards.map( ( card, i ) => {

            const x     = ( Math.random() * 20 ) - 10;
            const y     = ( Math.random() * 20 ) - 10;
            const angle = ( Math.random() * 30 ) - 15;

            return <Card
                card = { card }
                key = { i }
                style = { {
                    transform : `translate(${ x }% ${ y }%) rotate(${ angle }deg)`,
                } }
            />;
        } );

        return (
            <div className = "discarded">
                { cards }
            </div>
        );
    }

}
