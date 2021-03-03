import React, { Component } from 'react';
import Snake from '../Snake/Snake';
import Food from '../Food/Food';
import GameStateMessage from "../GameStateMessage/GameStateMessage";
import SnakeLength from "../SnakeLength/SnakeLength";
import StartGame from "../ButtonStartGame/ButtonStartGame";
import ButtonTryAgain from "../ButtonTryAgain/ButtonTryAgain"
import ButtonPauseGame from "../ButtonPauseGame/ButtonPauseGame";
// import Hotkeys from "../Hotkeys/Hotkeys";
import Sound from "../Sound/Sound";
import Footer from "../Footer/Footer"
import MaxSpeed from "../MaxSpeed/MaxSpeed";
import CurrentDisplayFood from "../CurrentDisplayFood/CurrentDisplayFood";
import '../CurrentDisplayFood/CurrentDisplayFood.css';
import ButtonSettings from "../Settings/ButtonSettings";
import DivSettings from "../Settings/DivSettings";

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
}
const initialState = {
  food: getRandomCoordinates(),
  speed: 150,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0]
  ],
  intervalId: null,
  isSettingsShow: false,
  isGameStart: false,
  isGamePause: false,
  isScoreHidden: true,
  startBtnText: ' Start game',
  soundAction: '',
  isPlayMusic: true,
  isPlaySoundEffect: true,
  musicVolume: 0.7
}

class App extends Component {

  state = initialState;
  collapseWarning = '';

  componentDidMount() {
    if (this.state.isGameStart) {
      this.setState({
        intervalId: setInterval(this.moveSnake, this.state.speed)
      }
      )
      document.onkeydown = this.onKeyDown;
    }
  }

  componentDidUpdate() {
    if (this.state.isGameStart) {
      this.checkIfOutOfBorders();
      this.checkIfCollapsed();
      this.checkIfEat();
    }
  }

  startGame = () => {
    this.collapseWarning = "";
    this.setState({
      speed: 150,
      direction: 'RIGHT',
      snakeDots: [
        [0, 0],
        [2, 0]
      ],
      intervalId: setInterval(this.moveSnake, this.state.speed),
      isGameStart: true,
      isGamePause: false,
      isScoreHidden: true,
      startBtnText: ' Start a new game',
      soundAction: 'play'
    });
    document.onkeydown = this.onKeyDown;
  };

  pauseGame = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      isScoreHidden: false,
      isGamePause: true,
      soundAction: 'pause'
    });
  }

  resumeGame = () => {
    this.setState({
      intervalId: setInterval(this.moveSnake, this.state.speed),
      isScoreHidden: true,
      isGamePause: false,
      soundAction: 'play'
    });
  }

  restartGame = () => {
    this.onGameOver();
    this.startGame();
  }

  onKeyDown = (event) => {
    event = event || window.event;
    switch (event.keyCode) {
      case 38:
        this.setState({ direction: 'UP' });
        break;
      case 40:
        this.setState({ direction: 'DOWN' });
        break;
      case 37:
        this.setState({ direction: 'LEFT' });
        break;
      case 39:
        this.setState({ direction: 'RIGHT' });
        break;
      default:
        this.setState({ direction: 'RIGHT' });
        break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
      default:
        head = [head[0] + 2, head[1]];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
      soundAction: 'play'
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.collapseWarning = " Collapse by self";
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates(),
        soundAction: 'playEat',
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver() {
    clearInterval(this.state.intervalId);
    this.setState({
      isGameStart: false,
      isScoreHidden: false,
      soundAction: 'stop'
    });
  }

  toggleShowSettings = () => {
    this.setState(({ isSettingsShow }) => {
      return {
        isSettingsShow: !isSettingsShow
      };
    });
  }

  togglePlayMusic = () => {
    this.setState(({ isPlayMusic }) => {
      return {
        isPlayMusic: !isPlayMusic
      };
    });
  }

  togglePlaySoundEffect = () => {
    this.setState(({ isPlaySoundEffect }) => {
      return {
        isPlaySoundEffect: !isPlaySoundEffect
      };
    });
  }

  setMusicVolume = value => {
    this.setState(({ musicVolume }) => {
      return {
        musicVolume: value
      };
    });
  }

  render() {
    const btnMusicText = this.state.isPlayMusic ? 'On' : 'Off';
    const btnSoundEffectText = this.state.isPlaySoundEffect ? 'On' : 'Off';

    return (
      <div className="main-block">

        <Sound action={this.state.soundAction}
          isPlayMusic={this.state.isPlayMusic}
          isPlaySoundEffect={this.state.isPlaySoundEffect}
          musicVolume={this.state.musicVolume} />

        <div className="buttons-area">

          <div className="buttonsMain-area">
            <ButtonPauseGame
              text={this.state.isGamePause ? " Resume game" : " Pause game"}
              isHidden={!this.state.isGameStart || this.state.isSettingsShow}
              gameAction={this.state.isGamePause ? this.resumeGame : this.pauseGame}/>
            <ButtonTryAgain
              text=' Try again'
              isHidden={!this.state.isGameStart || this.state.isSettingsShow}
              restartGame={this.restartGame}/>
          </div>
          <div>
            <ButtonSettings
                toggleShowSettings={this.toggleShowSettings}
                isHidden={this.state.isGameStart && !this.state.isGamePause}
                setMusicVolume={this.setMusicVolume} />
          </div>
        </div>

          <div className="currentDisplayAll">
            <CurrentDisplayFood
              isHidden={!this.state.isGameStart}
              snakeDots={this.state.snakeDots.length - 2} />
            <MaxSpeed
              speedStyle="currentDisplayValue"
              isHidden={!this.state.isGameStart}
              speed={this.state.snakeDots.length * 10 - 10}/>
          </div>
          {/* <Hotkeys /> */}


        <DivSettings isSettingsShow={!this.state.isSettingsShow}
          togglePlayMusic={this.togglePlayMusic}
          btnMusicText={btnMusicText}
          togglePlaySoundEffect={this.togglePlaySoundEffect}
          btnSoundEffectText={btnSoundEffectText} />

        <div className="game-area" hidden={this.state.isSettingsShow}>
          <Snake snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />

          <div className="results">
            <GameStateMessage
              isHidden={this.state.isScoreHidden}
              text={this.state.isGameStart ? "Pause..." : "Game Over!"}
              collapseWarning={this.collapseWarning} />

            <SnakeLength
              isHidden={this.state.isScoreHidden || this.state.isGamePause}
              snakeDots={this.state.snakeDots.length}
              time={this.state.time} />
            <MaxSpeed
              speedStyle="gameOver"
              isHidden={this.state.isScoreHidden || this.state.isGamePause}
              speed={this.state.snakeDots.length * 10 - 10}
              time={this.state.time} />
            <StartGame
              // text=' Start a new game'
              text={this.state.startBtnText}
              isShow={this.state.isGameStart}
              startGame={this.startGame}
            />
          </div>
        </div>
        <Footer />
      </div>

    );
  }

}

export default App
