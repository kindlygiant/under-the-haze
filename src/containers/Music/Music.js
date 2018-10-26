import React from 'react';
//Styling
import './Music.scss';

//Components

class Music extends React.Component{
    render(){
        return (
            <div className="Music">
                <p>
                    No music yet! Mostly because Will has been <strong>slacking.</strong>
                </p>
            </div>
        );
    }
}

export default Music;