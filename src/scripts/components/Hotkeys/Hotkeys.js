import React, {Component} from 'react';
import './Hotkeys.css';

export default class Hotkeys extends Component {

  render() {
    const {isHidden, toggleShowHotkeys} = this.props;

    return (
      <div>
        <button
          className="startGame btn btn-primary btn-lg"
          hidden={isHidden}
          onClick={toggleShowHotkeys}>
          <i className="fa fa-keyboard-o" aria-hidden="true"/>
          <span> Hotkeys</span>
        </button>
      </div>
    );
  };
}