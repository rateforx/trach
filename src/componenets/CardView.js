import React, { Component } from 'react';
import './CardView.less';
import { romanize }         from '../utils';

export default class Card extends Component {

    constructor ( props, context ) {
        super( props, context );
        this.state = {
            showDescription : false,
        };
    }

    render () {
        const { self, other } = this.props.card.priority;
        const priority        = self === other ?
            romanize( self ) :
            `${ romanize( other ) } (${ romanize( self ) })`;

        return (
            <div className = { `card card-${ this.props.card.type }` }>
                <h1 className = "name">{ this.props.card.name }</h1>
                { this.state.showDescription ? (
                    <p className = "description">{ this.props.card.description }</p>
                ) : (
                    <img className = "art" alt = "" src = { undefined }/>
                ) }
                <h2 className = "priority">{ priority }</h2>
            </div>
        );
    }
};
