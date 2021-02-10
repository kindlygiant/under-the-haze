import React from 'react';
//Styling
import './Music.scss';

//Components
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'

class Music extends React.Component{
    render(){
        return (
            <div className="content music">
                <p>
                    We have one song. This is it.
                </p>
                <MusicPlayer/>
            </div>
        );
    }
}

export default Music;