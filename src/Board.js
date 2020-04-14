import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import './Board.css';

// import attack from './assets/img/cards/attack.jpg';
// import brick from './assets/img/cards/brick.jpg';
// import defense from './assets/img/cards/defense.jpg';
// import deflection from './assets/img/cards/deflection.jpg';
// import freeze from './assets/img/cards/freeze.jpg';
// import globalisation from './assets/img/cards/globalisation.jpg';
// import healing from './assets/img/cards/healing.jpg';
// import massiveAttack from './assets/img/cards/massive-attack.jpg';
// import nuclearButton from './assets/img/cards/nuclear-button.jpg';
// import piercing from './assets/img/cards/piercing.jpg';
// import resurrection from './assets/img/cards/resurrection.jpg';
// import shelter from './assets/img/cards/shelter.jpg';
// import transfer from './assets/img/cards/transfer.jpg';
import heart                from './assets/img/heartbeat-solid.svg';

export class TrachGameBoard extends Component {

    static propTypes = {
        G            : PropTypes.any.isRequired,
        ctx          : PropTypes.any.isRequired,
        moves        : PropTypes.any.isRequired,
        playerID     : PropTypes.string,
        isActive     : PropTypes.bool,
        isMultiplayer: PropTypes.bool,
    };

    render() {
        return (
            <div className = 'game'>

                <div className = 'players'>
                    { this.props.G.players.map( ( player, index ) =>
                        <div className = 'player'>
                            <h2>{ `${ player.name }#${ index }` }</h2>
                            <div className = 'health'>
                                { new Array( player.health ).fill(
                                    <img src = { heart } alt = { heart } width = '20' height = 'auto'/>,
                                ) }
                            </div>
                        </div> ) }
                </div>

                <div className = 'hand'>
                    { this.props.G.players[ this.props.playerID ].hand.map( card =>
                        <div className = { `card ${ card.classname }` }>
                            <h3>{ card.name }</h3>
                        </div>,
                    ) }
                </div>

            </div>
        );
    }
}
