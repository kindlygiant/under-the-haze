import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

//Styling
import './NavLinks.scss';

//Data
import linkList from './LinkList.json';

function FormatNavLinks(props) {
    const linksList = props.links.filter(a => a.visible);
    const listItems = linksList.map((link, i) =>
        <li key={i}>
            <Link 
                to={link.link} 
                className={props.active === link.link ? "active" : ""}
                data-hover={link.name}
                onClick={props.handler.bind(this, link.link)}>
                {link.name}
            </Link>
        </li>
    );
    if (listItems && props.isMobile) {
        return (
            <Menu isOpen={false} width={"100%"} pageWrapId={"page-wrap"} outerContainerId={"app"} customCrossIcon={ false } noOverlay>
                {listItems}
            </Menu>
        )
    } else if(listItems && !props.isMobile) {
        return (
            <div className='links'>
                {listItems}
            </div>
        )
    } else {
        return (
            <p> No Links found...This shouldn't happen...I'm embarassed.</p>
        )
    }
}

class NavLinks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: '/home'
        }
        this.isMobile = props.isMobile;
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(menuItem) { 
        this.setState({ active: menuItem });
    }

    render(){
        return (
            <FormatNavLinks 
                links={linkList} 
                active={this.state.active} 
                isMobile={this.isMobile}
                handler={this._handleClick}>
            </FormatNavLinks>
        );
    }
}

export default NavLinks;