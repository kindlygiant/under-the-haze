import React from 'react';
//Styling
import './CastTile.scss';

import portrait from "../../assets/img/placeholder.png"

//Components
class CastTile extends React.Component{ 
    constructor(props) {
        super(props);
        this.name = props.name;
        this.portrait = portrait; // You can add some logic to swap out the image later
        this.roles = props.roles;
        this.bio = props.bio;
    }

    render(){
        return (
            <div className="cast-tile slot-1">
                <div className="content-left">
                    <div className="portrait">
                        <img src={this.portrait} alt="{this.name}"></img>
                    </div>
                </div>
                <div className="content-right">
                    <div className="name">{this.name}</div>
                    <div className="roles">{this.roles}</div>
                    <div className="bio">{this.bio}</div>
                </div>
            </div>
        );
    }
}

export default CastTile;