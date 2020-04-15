import { Container, Sprite, Stage, TilingSprite } from '@inlet/react-pixi';
import React, { Component }                       from 'react';
import { PixiCard, PixiCard2 }                 from './Card';
import wood from './assets/img/wood.png';

export default class PixiBoard extends Component {

    render() {
        return (
            <Stage
                width = { window.innerWidth }
                height = { window.innerHeight }
                options = { {
                    antialias : true,
                } }
            >
                <TilingSprite
                    image = { wood }
                    width = { window.innerWidth }
                    height = { window.innerHeight }
                    tileScale = { .75 }
                />
                <Container
                    x = { 0 }
                    y = { window.innerHeight * .6 }
                >
                    { this.props.G.players[ this.props.playerID ].hand.map( ( card, index ) => {
                        return <PixiCard2
                            key = { index }
                            image = { card.image }
                            name = { card.name }
                            description = { card.description }
                            x = { index * 200 + 100 }
                            y = { 0 }
                        />;
                    } ) }
                </Container>

            </Stage>
        );
    }
}
