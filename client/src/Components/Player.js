import React from 'react';

const Player = props => {
    return (
        <>
            <div className="player">
                <p>Name: {props.player.name}</p>
                <p>Country: {props.player.country}</p>
                <p>Searches: {props.player.searches}</p>
            </div>
        </>
    );
};

export default Player;
