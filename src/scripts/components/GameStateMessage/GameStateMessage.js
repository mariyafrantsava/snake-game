import React from 'react';
import './GameStateMessage.css';

const putStateMessage = ({isHidden, text, collapseWarning}) => {
    return (
        <div
            className="gameOver"
            hidden={isHidden}>
            {text}
            <p>{collapseWarning}</p>
        </div>
    )
}
export default putStateMessage;