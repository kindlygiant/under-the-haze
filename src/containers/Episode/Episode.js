import React from 'react';
//Styling
import './Episode.scss';

//Components

class Episode extends React.Component{
    render(){
        return (
            <div className="episodes">
                <p>
                    No episodes yet! Mostly because we're just <strong>so so very lazy.</strong>
                </p>
            </div>
        );
    }
}

export default Episode;