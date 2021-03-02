import React, { Component } from 'react';
import './Footer.css';
import imgGitHub from '../../../assets/images/GitHub.png';
import imgRS from '../../../assets/images/rs-school.svg';

export default class Footer extends Component{
    render() {
        return(
       <footer>
            <img className="gh-logo" src={imgGitHub} alt="qwe1"/>
            <div className="author">
                <a className="gh-link" href="https://github.com/mariyafrantsava" target="blank">
                    <span className="maria-link">Mariya Frantsava</span>
                </a>
            </div>
            <a className="rss-link" href="https://rs.school/js/" target="blank">
                <img className="rss-logo" src={imgRS} alt="qwe"/>
            </a>
        </footer>
        )
    }
}
