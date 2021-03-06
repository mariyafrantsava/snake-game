import React from 'react';
import './CurrentDisplayFood.css';

const displayFood = ({isHidden, snakeDots}) => {
  return (
    <div className="currentDisplayValue"
         hidden={isHidden}
    >
      eaten food: {snakeDots}
    </div>
  )
}
export default displayFood;