import React from 'react';
import Player from './Player';
import useDarkMode from '../hooks/useDarkMode';

const PlayerList = props => {
    const [isDarkMode, flipBoolean] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        flipBoolean(!isDarkMode);
    };

    return (
        <>
            <div className='dark-mode__toggle'>
                <div
                    onClick={toggleMode}
                    className={isDarkMode ? 'toggle toggled' : 'toggle'}
                ></div>
            </div>
            {props.players.map(player => (
                <Player key={Math.random() * 100000} player={player} />
            ))}
        </>
    );
};

export default PlayerList;
