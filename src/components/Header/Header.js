import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

//Styling
import './Header.scss';

//Components

class Header extends React.Component{
    links = [ 
        {
            link:'/overview', 
            name:'Overview'
        },
        {
            link:'/episodes',
            name:'Episodes'
        },
        {
            link:'/music',
            name:'Music'
        },
        {
            link:'/donate',
            name:'Donate'
        }
    ];
    
    render(){
        return (
            <div className="header">
                <div className="nav mobile">
                    <Menu isOpen={false}>
                        {this.links.map((link) =>
                            <Link to={link.link}>{link.name}</Link>
                        )}
                    </Menu>
                </div>
                <div className='title'>
                    <Link to={'/'}>
                        <h1>Hello World!</h1>
                    </Link>
                </div>
                <div className="nav desktop">
                    {this.links.map((link) =>
                        <Link to={link.link}>{link.name}</Link>
                    )}
                </div>
            </div>
        );
    }
}

export default Header;