import React, { Component } from 'react';
// import {CSSTransitionGroup} from 'react-transition-group';

// import InlineSVG from 'react-inlinesvg';
// import ImagePGP from '../img/PGP.svg';

import SketchTshirt from './Sketches/Tshirt';

class ItemSizes extends Component {
    constructor (props) {
        super (props);

        this.state = {
            selectedSize: props.defaultSize,
            arrowExplanation: null
        }

        this.onNavSizeClick = this.onNavSizeClick.bind(this);
        this.updateArrowExplanation = this.updateArrowExplanation.bind(this);
    }

    onNavSizeClick(i) {
        return () => {
            this.setState({
                selectedSize: i
            });
        }
    }

    updateArrowExplanation(text) {
        this.setState({
            arrowExplanation: text
        })
    }

    render () {
        let sizeNavItems = this.props.sizes.map((s, i) => {
            let selectedClass = (i === this.state.selectedSize ? 'selected' : '')

            return (<div className={selectedClass} onClick={this.onNavSizeClick(i)}>
                {s}
            </div>);
        });

        return (
            <div className='ItemSizes'>
                <nav className='ItemSizes__Nav'>
                    {sizeNavItems}
                </nav>
                <div className='ItemSizes__Main'>
                    <div className='ItemSizes__Sketch'>
                        <SketchTshirt handleHoverArrow={this.updateArrowExplanation}/>
                    </div>
                    <div className='ItemSizes__ArrowExplanation'>
                        {this.state.arrowExplanation}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemSizes;
