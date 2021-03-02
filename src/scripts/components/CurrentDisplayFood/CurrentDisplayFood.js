import React from 'react';
import './CurrentDisplayFood.css';

export default ({isHidden, snakeDots}) => {
    return (
        <div className="currentDisplayValue"
            hidden={isHidden}
            >
            eaten food: {snakeDots}
        </div>
    )
}