import React, {Component} from 'react';
import './Settings.css';

export default class DivSettings extends Component {

    render() {
        const {isSettingsShow, togglePlayMusic, btnMusicText,
            togglePlaySoundEffect ,btnSoundEffectText} = this.props;

        return (
            <div className="settings" hidden={isSettingsShow}>
                <span className="settings-title">Settings:</span>
                <br/>

                <span className="setting">Music </span>
                <button className="startGame btn btn-primary btn-lg"
                    onClick={togglePlayMusic}>
                    {btnMusicText}</button>

                <input id="musicVolum" type="range" min="0.1" max="1" step="0.1"
                    onChange={()=>{console.log(document.getElementById("musicVolum").value)}}/>
                <br/>

                <span className="setting"> Sound effect </span>
                <button className="startGame btn btn-primary btn-lg"
                        onClick={togglePlaySoundEffect}>
                    {btnSoundEffectText}</button>
                <br/>

                <span className="setting"> Speed </span>
                <button className="startGame btn btn-primary btn-lg"
                    //     onClick={togglePlaySoundEffect}
                >
                     {/*{btnSoundEffectText}*/}
                </button>
                <br/>

                <span className="setting"> Size of field </span>
                <button className="startGame btn btn-primary btn-lg"
                    //     onClick={togglePlaySoundEffect}
                >
                    {/*{btnSoundEffectText}*/}
                </button>
                <br/>

                <span className="setting"> Hole </span>
                <button className="startGame btn btn-primary btn-lg"
                    //     onClick={togglePlaySoundEffect}
                >
                    {/*{btnSoundEffectText}*/}
                </button>
            </div>
        );
    };
}