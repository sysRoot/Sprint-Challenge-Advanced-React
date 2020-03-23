import React from 'react';
import Player from './Player';

const PlayerList = props => {
    return (
        <>
            {props.players.map(player => (
                <Player player={player} />
            ))}
        </>
    );
};

export default PlayerList;
