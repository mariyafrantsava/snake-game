import React, {Component} from 'react';
import './Settings.css';

export default class DivSettings extends Component {
  render() {
    const {
      isSettingsShow, togglePlayMusic, btnMusicText, musicVolume, soundEffectVolume,
      togglePlaySoundEffect, btnSoundEffectText, setMusicVolume, setSoundEffectVolume,
      toggleSpeed, speedRate
    } = this.props;

    return (
      <div className="settings" hidden={isSettingsShow}>
        <span className="settings-title">Settings:</span>
        <br/>

        <span className="setting">Music </span>
        <button className="startGame btn btn-primary btn-lg"
                onClick={togglePlayMusic}>
          {btnMusicText}</button>

        <input id="musicVolume" type="range" min="0.1" max="1" step="0.1" defaultValue={musicVolume}
               onChange={setMusicVolume}/>
        <br/>

        <span className="setting"> Sound effect </span>
        <button className="startGame btn btn-primary btn-lg"
                onClick={togglePlaySoundEffect}>
          {btnSoundEffectText}</button>

        <input id="soundEffectVolume" type="range" min="0.1" max="1" step="0.1" defaultValue={soundEffectVolume}
               onChange={setSoundEffectVolume}/>
        <br/>

        <span className="setting"> Speed </span>
        <select id="speed" onChange={toggleSpeed} defaultValue={speedRate}>
          <option value="2">Low</option>
          <option value="1.5">Norm</option>
          <option value="1">High</option>
        </select>
      </div>
    );
  };
}