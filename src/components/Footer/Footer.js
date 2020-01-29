import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';

//Styling
import './Footer.scss';

//Assets
import logo from '../../assets/img/uth_logo.svg';

class Footer extends React.Component{

    render(){
        return (
            <div className="footer">
                <div className='logo'>
                    <Link to={'/'}>
                        <img src={logo} alt="Under the Haze"></img>
                    </Link>
                </div>
                <div className="mobile">
                    <NavLinks isMobile={false}></NavLinks>
                </div>
            </div>
        );
    }
}

export default Footer;