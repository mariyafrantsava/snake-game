import React from 'react';

export default ({isHidden, toggleShowSettings}) => {
    return (
        <button
            className="button-setting startGame btn btn-primary btn-lg"
            hidden={isHidden}
            onClick={toggleShowSettings}>
            <i className="fa fa-cog" aria-hidden="true"/>
            <span> Settings</span>
        </button>
    )
}