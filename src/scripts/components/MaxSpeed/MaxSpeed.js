import React from 'react';

const putMaxSpeed = ({isHidden, speed, speedStyle}) => {
  const text = "";
  return (
    <div
      className={speedStyle}
      hidden={isHidden}>
      max speed: {speed}
    </div>
  )
}
export default putMaxSpeed;