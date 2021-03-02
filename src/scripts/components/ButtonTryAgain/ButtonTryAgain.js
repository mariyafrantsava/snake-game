import React, {Component} from 'react';

export default class ButtonTryAgain extends Component {

    render() {
        const { isHidden, text, restartGame } = this.props;

        return (
            <button
                className="startGame btn btn-primary btn-lg"
                hidden={isHidden}
                onClick={ restartGame }>
                <i className='fa fa-repeat fa-lg'/>
                <span>{text}</span>
            </button>
        );
    };
}