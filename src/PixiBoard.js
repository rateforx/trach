import { Container, Sprite, Stage } from '@inlet/react-pixi';
import React, { Component }         from 'react';
import { PixiCard }                 from './Card';

export default class PixiBoard extends Component {

    render() {
        return (
            <Stage
                width = { window.innerWidth }
                height = { window.innerHeight }
                options = { {
                    antialias: true,
                } }
            >
                <Container
                    x = { 0 }
                    y = { window.innerHeight * .6 }
                >
                    { this.props.G.players[ this.props.playerID ].hand.map( ( card, index ) => {
                        return <PixiCard
                            key = { index }
                            image = { card.image }
                            x = { index * 200 + 100 }
                            y = { 0 }
                        />;
                    } ) }
                </Container>

            </Stage>
        );
    }
}
