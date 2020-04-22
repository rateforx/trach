import React, { Component } from 'react';
import './StackView.css';
import Card                 from './CardView';

export default class Stack extends Component {

    render () {
        const cards = this.props.cards.map( ( card, i ) => {
            return <Card
                card = { card }
                key = { i }
            />;
        } );

        return (
            <div className = "stack">
                { cards }
            </div>
        );
    }
}
