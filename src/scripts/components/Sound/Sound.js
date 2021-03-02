import React, {Component} from 'react';
import startMusic from "../../../assets/music/start-music.mp3";
import eatMusic from "../../../assets/music/eat-music.mp3";
import gameOver from "../../../assets/music/game-over-music.mp3";

export default class Sound extends Component {

    audio = new Audio(startMusic);
    audioEat = new Audio(eatMusic);
    audioGameOver = new Audio(gameOver);

    play = () => {
        this.audio.loop = true;
        this.audio.volume = 0.7;
        this.audio.play();
    }

    playEat = () => {
        this.audioEat.loop = false;
        this.audioEat.play();
    }

    pause = () => {
        this.audio.pause();
    }

    stop = () => {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audioGameOver.play();
    }

    render() {
        const { action } = this.props;

        switch (action) {
            case 'play' :
                this.play();
                break;
            case 'pause' :
                this.pause();
                break;
            case 'stop' :
                this.stop();
                break;
            case 'playEat' :
                this.playEat();
                break;
        }

        return (
            <audio className="audio"/>
        );
    };
}