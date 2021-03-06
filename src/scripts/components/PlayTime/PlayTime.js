import React from 'react';

const playTime = ({isShow, time}) => {
  return (
    <div
      className="gameOver"
      hidden={isShow}>
      Time of game: {time}
    </div>
  )
}
export default playTime;