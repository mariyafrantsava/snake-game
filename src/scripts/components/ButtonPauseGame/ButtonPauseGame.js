import React from 'react';

export default ({isHidden, text, gameAction}) => {
        return (
        <button
            className="startGame btn btn-primary btn-lg"
            hidden={isHidden}
            onClick={ gameAction }>
            <i className="fa fa-pause" aria-hidden="true"/>
            <span>{text}</span>
        </button>
    )
}