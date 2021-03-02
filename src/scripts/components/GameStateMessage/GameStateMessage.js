import React from 'react';

export default ({isHidden, text, collapseWarning}) => {
    return (
        <div
            className="gameOver"
            hidden={ isHidden } >
            { text }
            <p>{ collapseWarning }</p>
        </div>
    )
}