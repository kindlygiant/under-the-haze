import React from 'react';
import { Link } from 'react-router-dom';

//Styling
import './Header.scss';

//Components
import Navigation from '../Navigation/Navigation';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className='title'>
                    <Link to={'/'}>
                        <h1>Hello World!</h1>
                    </Link>
                </div>
                <Navigation></Navigation>
            </div>
        );
    }
}

export default Header;