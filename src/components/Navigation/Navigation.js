import React from 'react';
//Styling
import './Navigation.scss';

//Components

class Navigation extends React.Component{
    render(){
        return (
            <div className="nav">
                <ul>
                    <li>Overview</li>
                    <li>Episodes</li>
                </ul>
            </div>
        );
    }
}

export default Navigation;