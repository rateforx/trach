import './Card.css';
import { Sprite }        from 'pixi.js';
import { PixiComponent } from '@inlet/react-pixi';

export default class Card {

    name     = undefined;
    type     = undefined;
    priority = {
        self   : undefined,
        target : undefined,
    };
    target   = undefined;
    image    = undefined;
    value    = undefined;


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
