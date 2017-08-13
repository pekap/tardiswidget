import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import CloseButton from '../img/CloseButton.svg';

class GlobalNav extends Component {
    render() {
        return (
            <nav className='TopNav'>
                <div className='TopNav__ItemImage' style={{backgroundImage: 'url('+this.props.itemImgUrl+')'}}></div>
                <div className='TopNav__ItemTitle'>{this.props.title}</div>
                <div onClick={this.props.handleCloseButton} className='TopNav__CloseButton' style={{backgroundImage: 'url('+CloseButton+')'}}></div>
            </nav>
        )
    }
};

export default GlobalNav;
