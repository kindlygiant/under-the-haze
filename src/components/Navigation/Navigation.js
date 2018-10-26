import React from 'react';
import { Link } from 'react-router-dom';
//Styling
import './Navigation.scss';

//Components

class Navigation extends React.Component{
    render(){
        return (
            <ul>
                <li>
                    <Link to={'/overview'}>Overview</Link>
                </li>
                <li>
                    <Link to={'/episodes'}>Episodes</Link>
                </li>
                <li>
                    <Link to={'/donate'}>Donate</Link>
                </li>
            </ul>
        );
    }
}

export default Navigation;