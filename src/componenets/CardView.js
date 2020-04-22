import React, { Component } from 'react';
import './CardView.css';
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
            <div className = "card-wrapper">
                <div
                    className = { `card card-${ this.props.card.type }` }
                    style = { this.props.style }
                    onClick = { () => {
                        this.setState( { showDescription : !this.state.showDescription } );
                    } }
                >
                    <h1 className = "name">{ this.props.card.name }</h1>
                    { this.state.showDescription ? (
                        <p className = "description">{ this.props.card.description }</p>
                    ) : (
                        <img className = "art" alt = "" src = { undefined }/>
                    ) }
                    <h3 className = "priority">{ priority }</h3>
                </div>
            </div>
        );
    }
};

export class CardReverse extends Component {

    render () {
        return (
            <div
                className = "card"
                style = { this.props.style }
            >
                <div className = "card-reverse"/>
            </div>
        );
    }

}
