import React from 'react';
import { Link } from 'react-router-dom';
//Styling
import './Episode.scss';

import thumbnail from "../../assets/img/GrandCanyon_poster_landscape_desktop.png";
import play_button from "../../assets/img/play_circle_outline-24px.png";

//Components
class Episode extends React.Component{ 
    constructor(props) {
        super(props);
        this.id = props.id;
        this.thumbnail = thumbnail; // You can add some logic to swap out the image later
        this.title = props.title;
        this.description = props.description;
        this.duration = props.duration;
        this.active_date = props.active_date;
        this.link = "/episode/" + this.id;
        this.audio = props.audio;
    }

    render(){
        return (
            <div className="episode">
                <div className="episode-audio">
                    <img className="audio-play" src={play_button}/>
                </div>
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
                <div className="episode-link">
                    <Link to={this.link}>
                        Episode Page
                    </Link>
                </div>
            </div>
        );
    }
}

export default Episode;