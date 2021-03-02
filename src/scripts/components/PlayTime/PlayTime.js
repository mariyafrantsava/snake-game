import React from 'react';

export default ({isShow, time}) => {
    return (
        <div
            className="gameOver"
            hidden={isShow} >
            Time of game: {time}
        </div>
    )
}