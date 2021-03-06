import React, {Component} from 'react';
import startMusic from "../../../assets/music/start-music.mp3";
import eatMusic from "../../../assets/music/eat-music.mp3";
import gameOver from "../../../assets/music/game-over-music.mp3";

export default class Sound extends Component {

  audio = new Audio(startMusic);
  audioEat = new Audio(eatMusic);
  audioGameOver = new Audio(gameOver);

  play = (isPlayMusic, musicVolume) => {
    if (isPlayMusic) {
      this.audio.loop = true;
      this.audio.volume = musicVolume;
      this.audio.play();
    }
  }

  playEat = (isPlaySoundEffect, soundEffectVolume) => {
    if (isPlaySoundEffect) {
      this.audioEat.loop = false;
      this.audioEat.volume = soundEffectVolume;
      this.audioEat.play();
    }
  }

  pause = () => {
    this.audio.pause();
  }

  stop = (isPlaySoundEffect, soundEffectVolume) => {
    if (isPlaySoundEffect) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audioGameOver.volume = soundEffectVolume;
      this.audioGameOver.play();
    }
  }

  render() {
    const {action, isPlayMusic, isPlaySoundEffect, musicVolume, soundEffectVolume} = this.props;

    switch (action) {
      case 'play' :
        this.play(isPlayMusic, musicVolume);
        break;
      case 'pause' :
        this.pause();
        break;
      case 'stop' :
        this.stop(isPlaySoundEffect, soundEffectVolume);
        break;
      case 'playEat' :
        this.playEat(isPlaySoundEffect, soundEffectVolume);
        break;
    }

    return (
      <audio className="audio"/>
    );
  };
}