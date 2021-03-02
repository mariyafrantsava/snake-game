import React, {Component} from 'react';

export default class DivSettings extends Component {

    render() {
        const {isSettingsShow, togglePlayMusic, btnMusicText,
            togglePlaySoundEffect ,btnSoundEffectText} = this.props;

        return (
            <div className="settings" hidden={isSettingsShow}>
                <span>Settings:</span>
                <br/>
                <span>Music </span>
                <button className="btn btn-primary btn-lg"
                    onClick={togglePlayMusic}>
                    {btnMusicText}</button>
                <input id="musicVolum" type="range" min="0.1" max="1" step="0.1"
                    onChange={()=>{console.log(document.getElementById("musicVolum").value)}}/>
                <br/>
                <span>Sound effect </span>
                <button className="btn btn-primary btn-lg"
                        onClick={togglePlaySoundEffect}>
                    {btnSoundEffectText}</button>
            </div>
        );
    };
}