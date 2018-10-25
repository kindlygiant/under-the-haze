import React from 'react';
//Styling
import './Navigation.scss';

//Components

class Navigation extends React.Component{
    render(){
        return (
            <ul className="nav">
                <li>Overview</li>
                <li>Episodes</li>
            </ul>
        );
    }
}

export default Navigation;