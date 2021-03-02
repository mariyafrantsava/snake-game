import React from 'react';

export default ({isHidden, snakeDots}) => {
    return (
        <div
            className="gameOver"
            hidden={isHidden} >
            snake length: {snakeDots}
        </div>
    )
}