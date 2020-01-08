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
                <div className="episode-header split-content">
                    <div className="left">
                        <img className="thumbnail"
                            src={this.thumbnail}
                            alt={this.title}>
                        </img>
                    </div>
                    <div className="right">
                        <div className="active-date">
                            {new Date(this.active_date).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric'})}
                        </div>
                        <div className="episode-title">
                            <span>Episode {this.id}:</span> 
                            <span>{this.title}</span>
                        </div>
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