import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import NavItemImagePlaceholder from '../img/NavItemImagePlaceholder.jpg';
import CloseButton from '../img/CloseButton.svg';

class GlobalNav extends Component {
    handleWidgetCloseButtonClick () {
        window.toggleWidget();
    }

    render() {
        return (
            <nav className='TopNav'>
                <div className='TopNav__ItemImage' style={{backgroundImage: 'url('+NavItemImagePlaceholder+')'}}></div>
                <div className='TopNav__ItemTitle'>Блуза Blugirl Folies</div>
                <div onClick={this.handleWidgetCloseButtonClick} className='TopNav__CloseButton' style={{backgroundImage: 'url('+CloseButton+')'}}></div>
            </nav>
        )
    }
};

export default GlobalNav;
