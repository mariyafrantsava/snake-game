import React from 'react';

 const pauseGame = ({isHidden, text, gameAction}) => {
    return (
        <button
            className="startGame btn btn-primary btn-lg btnPause-Resume"
            hidden={isHidden}
            onClick={gameAction}>
            <i className="fa fa-pause" aria-hidden="true"/>
            <span>{text}</span>
        </button>
    )
}
export default pauseGame;