import React, {Component} from 'react';
import './Hotkeys.css';

export default class HotkeysDisplay extends Component {

  render() {
    const {isHotkeysShow} = this.props;

    return (
      <div className="hotkeys" hidden={isHotkeysShow}>
        <ul>
          <li>
                        <span>
                            <i className="fa fa-arrow-up" aria-hidden="true"> </i>
                        </span>
            <span> Up</span>
          </li>
          <li>
                        <span>
                            <i className="fa fa-arrow-down" aria-hidden="true"> </i>
                        </span>
            <span> Down</span>
          </li>
          <li>
                        <span>
                            <i className="fa fa-arrow-left" aria-hidden="true"> </i>
                        </span>
            <span> Left</span>
          </li>
          <li>
                        <span>
                            <i className="fa fa-arrow-right" aria-hidden="true"> </i>
                        </span>
            <span> Right</span>
          </li>
          <li>
            <span className="hotkeysLetters"> N</span>
            <span> New / Restart game</span>
          </li>
          <li>
            <span className="hotkeysLetters"> P</span>
            <span> Pause / Resume</span>
          </li>
          <li>
            <span className="hotkeysLetters"> S</span>
            <span> Settings</span>
          </li>
          <li>
            <span className="hotkeysLetters"> H</span>
            <span> Hotkeys</span>
          </li>
        </ul>
      </div>
    );
  };
}