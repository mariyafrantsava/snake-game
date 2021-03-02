import React from 'react';

export default ({toggleShowSettings}) => {
    return (
        <button
            className="settings btn btn-primary btn-lg"
            onClick={toggleShowSettings}>
            <i className="fa fa-info" aria-hidden="true"/>
            <span> Settings</span>
        </button>
    )
}