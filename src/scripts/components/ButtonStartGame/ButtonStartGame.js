import React, {Component} from 'react';
import './ButtonStartGame.css';

export default class ButtonStartGame extends Component {
    render() {
        const {isShow, text, startGame} = this.props;

        return (
            <button
                className="startGame btn btn-primary btn-lg start"
                hidden={isShow}
                onClick={startGame}>
                <i className="fa fa-play" aria-hidden="true"/>
                {text}
            </button>
        );
    };
}