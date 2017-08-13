import React, { Component } from 'react';

import SketchTshirt from './Sketches/Tshirt';
import SketchPants from './Sketches/Pants';
import SketchBlouse from './Sketches/Blouse';
import SketchTanktop from './Sketches/Tanktop';
import SketchShorts from './Sketches/Shorts';
import SketchSkirt from './Sketches/Skirt';
import SketchDress from './Sketches/Dress';
import SketchDressSleeveless from './Sketches/DressSleeveless';

class ItemSizes extends Component {
    constructor (props) {
        super (props);

        this.state = {
            selectedSize: props.defaultSize,
            arrowExplanation: 'Наведите на мерку'
        }

        this.onNavSizeClick = this.onNavSizeClick.bind(this);
        this.updateArrowExplanation = this.updateArrowExplanation.bind(this);
    }

    onNavSizeClick(s) {
        return () => {
            this.setState({
                selectedSize: s
            });
        }
    }

    updateArrowExplanation(text) {
        let t = (text == '' ? 'Наведите на мерку' : text);
        this.setState({
            arrowExplanation: text
        })
    }

    renderItemSketch() {
        let p = {
            measurements: this.props.measurements,
            handleHoverArrow: this.updateArrowExplanation
        }

        switch (this.props.itemType) {
            case 'tshirt':
                return <SketchTshirt {...p} />;
            case 'pants':
                return <SketchPants {...p} />;
            case 'blouse':
                return <SketchBlouse {...p} />;
            case 'tanktop':
                return <SketchTanktop {...p} />;
            case 'shorts':
                return <SketchShorts {...p} />;
            case 'skirt':
                return <SketchSkirt {...p} />;
            case 'dress':
                return <SketchDress {...p} />;
            case 'dresssleeveless':
                return <SketchDressSleeveless {...p} />;
            default:
                return <div>Can not recognize the type</div>;
        }
    }

    render () {
        let sizeNavItems = this.props.sizes.map((s, i) => {
            let selectedClass = (s === this.state.selectedSize ? 'selected' : '')

            return (<div className={selectedClass} onClick={this.onNavSizeClick(s)}>
                {s}
            </div>);
        });

        // Here you would pass different measurements based on which item is selected


        return (
            <div className='ItemSizes'>
                <nav className='ItemSizes__Nav'>
                    {sizeNavItems}
                </nav>
                <div className='ItemSizes__Main'>
                    <div className='ItemSizes__Sketch'>
                        {this.renderItemSketch()}
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
