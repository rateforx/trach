import { PixiComponent }                                                         from '@inlet/react-pixi';
import { GlowFilter }                                                            from 'pixi-filters';
import { Container, NineSlicePlane, Graphics, Sprite, Text, TextStyle, Texture } from 'pixi.js';
import { backgrounds, borderTexture }                                            from './assets';
import { romanize }                                                              from './utils';

export const TYPES = {
    offensive : 'offensive',
    defensive : 'defensive',
    buff      : 'buff',
    special   : 'special',
    regen     : 'regen',
};

export default class Card {

    code            = undefined;
    name            = undefined;
    description     = '';
    type            = undefined;
    priority        = {
        self  : undefined,
        other : undefined,
    };
    defaultPriority = {
        self  : undefined,
        other : undefined,
    };

    originator   = undefined;
    target       = undefined;
    image        = undefined;
    value        = undefined;
    defaultValue = undefined;

    constructor ( options ) {
        Object.assign( this, options );
    }

    applyEffect ( game, context, target ) {

    }

    onUse ( game, context, playerID ) {

    }

    onDestroy ( game, context, playerID ) {

    }

    onDiscard () {
        //todo
        this.priority = { ...this.defaultPriority };
        this.value    = this.defaultValue;
        this.target   = undefined;
    }

    onAttach ( game, context, targetCard ) {
        if ( this.type !== 'buff' ) {
            console.stack( `Error: onAttack event called on a non buff card!` );
            return;
        }
    }

    onDetach ( game, context, attachedCard ) {
        if ( this.type !== 'buff' ) {
            console.stack( `Error: onDetach event called on a non buff card!` );
            return;
        }
    }
}

const TYPES_COLORS = {
    offensive : 0xB4300A,
    defensive : 0x0047e0,
    buff      : 0x87E431,
    special   : 0x8C8C8C,
    regen     : 0x00aaff,
};

export const PixiCard = PixiComponent( 'PixiCard', {

    create ( props ) {
        const container = new Container();

        const background = Sprite.from( backgrounds[ Math.floor( Math.random() * backgrounds.length ) ] );

        // const background = new Graphics();
        // const bgTexture  = Texture.from( backgrounds[ Math.floor( Math.random() * backgrounds.length ) ] );
        // background.beginTextureFill( {
        //     texture : bgTexture,
        // } );
        // background.drawRoundedRect( 0, 0, bgTexture.width, bgTexture.height, 10 );
        // background.endFill();
        container.addChild( background );

        const border = new NineSlicePlane(
            Texture.from( borderTexture ), 38, 38, 38, 38,
        );
        border.position.set( 18 );
        border.tint = TYPES_COLORS[ props.card.type ];
        container.addChild( border );

        const name = new Text( props.card.name, new TextStyle( {
            fontFamily : 'Special Elite',
            fontSize   : '48pt',
            fill       : '#bfad8f',
        } ) );
        name.position.set(
            ( container.width / 2 ) - ( name.width / 2 ),
            container.height * .1,
        );
        container.addChild( name );

        if ( props.card.priority ) {
            const { self, other } = props.card.priority;
            const priority        = new Text(
                self === other ? romanize( self ) : `${ romanize( other ) } (${ romanize( self ) })`,
                new TextStyle( {
                    fontFamily : 'Special Elite',
                    fontSize   : '48pt',
                    fill       : '#bfad8f',
                } ),
            );
            priority.position.set(
                container.width * .1,
                container.height * .875,
            );
            container.addChild( priority );
        }

        container.filters = [
            new GlowFilter( {
                distance      : 10,
                color         : TYPES_COLORS[ props.card.type ],
                quality       : .5,
                outerStrength : 0,
            } ),
        ];

        return container;
    },

    applyProps ( instance, _, props ) {
        instance.position.set( props.x, props.y );
        instance.interactive = true;
        instance.buttonMode  = true;
        instance
            .on( 'mouseover', onMouseOver )
            .on( 'mouseout', onMouseOut )
            .on( 'pointerdown', onDragStart )
            .on( 'pointerup', onDragEnd )
            .on( 'pointerupoutside', onDragEnd )
            .on( 'pointermove', onDragMove )
        ;
        instance.scale.set( .4 );
        instance.angle = props.angle ? props.angle : 0;

        function onMouseOver ( event ) {
            this.filters[ 0 ].outerStrength = 10;
        }

        function onMouseOut ( event ) {
            this.filters[ 0 ].outerStrength = 0;
        }

        function onDragStart ( event ) {
            // store a reference to the data
            // the reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data     = event.data;
            this.alpha    = 0.5;
            this.dragging = true;

            // bring to top
            const parent = this.parent;
            parent.removeChild( this );
            parent.addChild( this );
        }

        function onDragEnd () {
            this.alpha    = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data     = null;
        }

        function onDragMove () {
            if ( this.dragging ) {
                const newPosition = this.data.getLocalPosition( this.parent );
                this.x            = newPosition.x - ( this.width / 2 );
                this.y            = newPosition.y - ( this.height / 2 );
            }
        }
    },

    willUnmount ( instance, parent ) {
        parent.removeChild( instance );
        instance.destroy();
    },
} );

