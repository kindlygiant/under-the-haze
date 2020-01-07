import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

//Styling
import './NavLinks.scss';

//Data
const links = [ 
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

class NavLinks extends React.Component{
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
            <Menu isOpen={false}>
                {links.map((link, i) =>
                    <li key={i}>
                        <Link 
                            to={link.link} 
                            
                            className={this.state.active === link.link ? "active" : ""}
                            data-hover={link.name}
                            onClick={this._handleClick.bind(this, link.link)}>
                            {link.name}
                        </Link>
                    </li>
                )}
            </Menu>
        );
    }
}

export default NavLinks;