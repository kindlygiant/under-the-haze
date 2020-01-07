import React from 'react';
//Styling
import './Episode.scss';

//Components
class Episode extends React.Component{ 
    constructor(props) {
        super(props);
        this.id = props.id;
        this.thumbnai = props.thumbnail;
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
                <div className="content">
                    <div className="active-date">
                        {this.active_date}
                    </div>
                    <div className="episode-header">
                        Episode {this.id} - {this.title}
                    </div>
                    <div className="description">
                        {this.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default Episode;