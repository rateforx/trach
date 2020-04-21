import { Container, Sprite, Stage, TilingSprite } from '@inlet/react-pixi';
import React, { Component }                       from 'react';
import { PixiCard }                               from './Card';
import wood                                       from './assets/img/wood.png';
import { assets }                                 from './assets';

export default class PixiBoard extends Component {

    render () {
        return (
            <Stage
                width = { window.innerWidth }
                height = { window.innerHeight }
                options = { {
                    antialias : true,
                } }
            >
                {/*<TilingSprite*/ }
                {/*    image = { wood }*/ }
                {/*    width = { window.innerWidth }*/ }
                {/*    height = { window.innerHeight }*/ }
                {/*    tileScale = { .75 }*/ }
                {/*/>*/ }

                <Container
                    x = { window.innerWidth * .25 }
                    y = { window.innerHeight * .1 }
                >
                    { this.props.G.stack.map( ( card, index ) => {
                        return <PixiCard
                            key = { index }
                            card = { card }
                            anchor = { .5 }
                            x = { index * 100 }
                            y = { 0 }
                        />;
                    } ) }
                </Container>

                <Container
                    x = { window.innerWidth * .85 }
                    y = { window.innerHeight * .35 }
                >
                    { this.props.G.secret.discarded.slice( -20, 20 ).map( ( card, index ) => {
                        return <PixiCard
                            key = { index }
                            card = { card }
                            anchor = { .5 }
                            x = { ( Math.random() * 40 ) - 20 }
                            y = { ( Math.random() * 40 ) - 20 }
                            angle = { ( Math.random() * 30 ) - 15 }
                        />;
                    } ) }
                </Container>

                <Container
                    x = { 0 }
                    y = { window.innerHeight * .55 }
                >
                    { this.props.G.players[ this.props.playerID ].hand.map( ( card, index ) => {
                        return <PixiCard
                            key = { index }
                            card = { card }
                            x = { index * 200 + 100 }
                            y = { 0 }
                        />;
                    } ) }
                </Container>

            </Stage>
        );

    }
}
