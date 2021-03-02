import React, { Component } from 'react';

class Time extends Component {
   state = {
       clock: 12
   }

    onOver() {
        console.log('stop')
    }

   render() {
       return(
           <div>{this.state.clock} часов</div>
       )
   }
}

export default Time