import React from 'react';

export default (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className='snake-dot' key={i} style={style}></div>
        )
      })}
    </div>
    // <div className="shake-dot" style={{ top: 0, left: 0 }}></div>
    // <div className="shake-dot" style={{ top: 0, left: '2%' }}></div>
    // <div className="shake-dot" style={{ top: 0, left: '4%' }}></div>
  )
}