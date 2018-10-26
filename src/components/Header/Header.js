import React from 'react';

//Styling
import './Header.scss';

//Components
import Navigation from '../Navigation/Navigation';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className='title'>
                    <h1>Hello World!</h1>
                </div>
                <Navigation></Navigation>
            </div>
        );
    }
}

export default Header;