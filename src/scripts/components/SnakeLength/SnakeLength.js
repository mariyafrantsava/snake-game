import React from 'react';

const createSnakeLength = ({isHidden, snakeDots}) => {
  return (
    <div
      className="gameOver"
      hidden={isHidden}>
      snake length: {snakeDots}
    </div>
  )
}
export default createSnakeLength;