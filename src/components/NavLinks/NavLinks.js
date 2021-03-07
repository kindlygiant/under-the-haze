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
            <Menu isOpen={props.menuOpen} onStateChange={(state => props.stateChange(state))} width={"100%"} pageWrapId={"page-wrap"} outerContainerId={"app"} customCrossIcon={ false } noOverlay>
                {listItems}
                <div className="social"></div>
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
            active: '/home',
            menuOpen: false
        }
        this.isMobile = props.isMobile;
        this.handleStateChange = this.handleStateChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen});
    }

    closeMenu(){
        this.setState({menuOpen: false});
    }
    
    toggleMenu(){
        this.setState(state =>({menuOpen: !state.menuOpen}));
    }

    _handleClick(menuItem) { 
        this.setState({ active: menuItem});
        this.closeMenu();
    }

    render(){
        return (
            <FormatNavLinks 
                links={linkList} 
                active={this.state.active}
                menuOpen={this.state.menuOpen}
                isMobile={this.isMobile}
                stateChange={this.handleStateChange}
                handler={this._handleClick}>
            </FormatNavLinks>
        );
    }
}

export default NavLinks;