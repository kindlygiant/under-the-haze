import React from 'react';
//Styling
import './Episode.scss';

//Components
class Episode extends React.Component{ 
    constructor(props) {
        super(props);
        this.id = props.id;
        this.thumbnail = props.thumbnail;
        this.title = props.title;
        this.description = props.description;
        this.duration = props.duration;
        this.active_date = props.active_date;
    }

    render(){
        return (
            <div className="episode">
                <img className="thumbnail"
                    src={this.thumbnail}
                    alt={this.title}>
                </img>
                <div className="episode-header">
                    <div className="active-date">
                        {new Date(this.active_date).toDateString()}
                    </div>
                    <div className="episode-title">
                        Episode {this.id} - {this.title}
                    </div>
                </div>
                <div className="episode-description">
                    {this.description}
                </div>
            </div>
        );
    }
}

export default Episode;