import React from 'react';

export default ({isHidden, speed, speedStyle}) => {
    const text = "";
    return (
        <div
            className={speedStyle}
            hidden={isHidden} >
            max speed: {speed}
        </div>
    )
}