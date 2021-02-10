import React from 'react';
//Styling
import './Music.scss';

import themeUrl from '../../assets/audio/theme.wav';

//Components
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'

class Music extends React.Component{
    constructor(props) {
        super(props);
        this.themeUrl=themeUrl;
    }
    render(){
        return (
            <div className="content music">
                <p>
                    We have one song. This is it.
                </p>
                <MusicPlayer
                    songUrl={this.themeUrl}
                />
            </div>
        );
    }
}

export default Music;