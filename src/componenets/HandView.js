import React, { Component } from 'react';
import './HandView.less';
import Card                 from './CardView';

export default class Hand extends Component {

    render () {
        const cards = this.props.cards.map( ( card, index ) => {
            return <Card card = { card } key = { index }/>;
        } );

        return (
            <div className = "hand">{ cards }</div>
        );
    }

}
