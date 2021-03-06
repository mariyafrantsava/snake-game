import React from 'react';

 const putFood = (props) => {

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return (
        <div className="snake-food" style={style}></div>

    )
}

export default putFood;