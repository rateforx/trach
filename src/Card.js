import { PixiComponent }                                               from '@inlet/react-pixi';
import { u }                                                           from 'boardgame.io/dist/esm/reducer-ccb19701';
import { Container, NineSlicePlane, Sprite, Texture, Text, TextStyle } from 'pixi.js';
import { backgrounds, borderTexture }                                  from './images';
import { romanize }                                                    from './utils';

export default class Card {

    name        = undefined;
    description = '';
    type        = undefined;
    priority    = {
        self   : undefined,
        target : undefined,
    };
    target      = undefined;
    image       = undefined;
    value       = undefined;


    constructor ( name, image ) {
        this.name  = name;
        this.image = image;
    }

    use () {
        console.log( `Override this method in the subclass.` );
    }

}

export const PixiCard = PixiComponent( 'PixiCard', {

    create ( props ) {
        return Sprite.from( props.image );
    },

    applyProps ( instance, _, props ) {
        instance.position.set( props.x, props.y );
        instance.interactive = true;
        instance.buttonMode  = true;
        instance.anchor.set( .5 );
        instance.scale.set( .4 );
        instance
            .on( 'pointerdown', onDragStart )
            .on( 'pointerup', onDragEnd )
            .on( 'pointerupoutside', onDragEnd )
            .on( 'pointermove', onDragMove )
        ;

        function onDragStart ( event ) {
            // store a reference to the data
            // the reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data  = event.data;
            this.alpha = 0.5;
            this.scale.set( .2 );
            this.anchor.set( .1 );
            console.log( this.parent.children );
            this.dragging = true;
        }

        function onDragEnd () {
            this.alpha    = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data     = null;
            this.scale.set( .4 );
            this.anchor.set( .5 );
        }

        function onDragMove () {
            if ( this.dragging ) {
                const newPosition = this.data.getLocalPosition( this.parent );
                this.x            = newPosition.x;
                this.y            = newPosition.y;
            }
        }
    },
} );

export const PixiCard2 = PixiComponent( 'PixiCard2', {

    create ( props ) {
        const container = new Container();

        const background = Sprite.from(
            backgrounds[ Math.floor( Math.random() * backgrounds.length ) ],
        );
        container.addChild( background );

        const border = new NineSlicePlane(
            Texture.from( borderTexture ), 38, 38, 38, 38,
        );
        border.position.set( 18 );
        border.tint = 0xff0000;
        container.addChild( border );

        const name = new Text( props.name, new TextStyle( {
            fontFamily : 'Special Elite',
            fontSize   : '48pt',
            fill       : '#bfad8f',
        } ) );
        name.position.set(
            ( container.width / 2 ) - ( name.width / 2 ),
            container.height * .1,
        );
        container.addChild( name );

        const priority = new Text( romanize( Math.floor( Math.random() * 7 ) ), new TextStyle( {
            fontFamily : 'Special Elite',
            fontSize   : '64pt',
            fill       : '#bfad8f',
        } ) );
        priority.position.set(
            container.width * .1,
            container.height * .875,
        );
        container.addChild( priority );


        return container;
    },

    applyProps ( instance, _, props ) {
        instance.position.set( props.x, props.y );
        instance.interactive = true;
        instance.buttonMode  = true;
        instance
            .on( 'pointerdown', onDragStart )
            .on( 'pointerup', onDragEnd )
            .on( 'pointerupoutside', onDragEnd )
            .on( 'pointermove', onDragMove )
        ;
        instance.scale.set( .4 );

        function onDragStart ( event ) {
            // store a reference to the data
            // the reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data  = event.data;
            this.alpha = 0.5;
            this.scale.set( .2 );
            this.dragging = true;
        }

        function onDragEnd () {
            this.alpha    = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data     = null;
            this.scale.set( .4 );
        }

        function onDragMove () {
            if ( this.dragging ) {
                const newPosition = this.data.getLocalPosition( this.parent );
                this.x            = newPosition.x;
                this.y            = newPosition.y;
            }
        }
    },
} );
