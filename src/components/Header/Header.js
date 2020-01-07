import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';

//Styling
import './Header.scss';

//Assets
import logo from '../../assets/img/uth_logo.svg';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: '/home'
        }
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(menuItem) { 
        this.setState({ active: menuItem });
    }

    render(){
        return (
            <div className="header">
                <div className="nav mobile">
                    <NavLinks isMobile={true}></NavLinks>
                </div>
                <div className='title'>
                    <Link to={'/'}>
                        <img src={logo} alt="Under the Haze"></img>
                    </Link>
                </div>
                <div className="nav desktop">
                    <NavLinks isMobile={false}></NavLinks>
                </div>
            </div>
        );
    }
}

export default Header;