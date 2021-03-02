import React, {Component} from 'react';
import './ButtonStartGame.css';
import startMusic from "../../../assets/music/start-music.mp3";

export default class ButtonStartGame extends Component {

    audio = new Audio(startMusic);

    play = () => {
        this.audio.loop = true;
        this.audio.play();
    }

    pause = () => {
        this.audio.pause();
    }

    stop = () => {
        this.audio.pause();
        this.audio.currentTime = 0;
    }


    render() {
        const { isShow, text, startGame } = this.props;
        /*if (isShow) {
            this.play();
        } else {
            this.stop();
        }*/

        return (
            <button
                className="startGame btn btn-primary btn-lg start"
                hidden={isShow}
                onClick={ startGame }>
                <i className="fa fa-play" aria-hidden="true"/>
                {text}
            </button>
        );
    };
}