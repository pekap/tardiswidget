import React, { Component } from 'react';

import TopNav from '../components/TopNav';
import ItemSizes from '../components/ItemSizes';
import InformationTable from '../components/InformationTable';
import NavItemImagePlaceholder from '../img/NavItemImagePlaceholder.jpg';

import TestMeasurements from './TestMeasurements';

// We are passing Here
// widgetOpened - whether or not the widget is open at the moment
// widgetClothingItemID - Basically ID of the item to do all the look up for the data, sizes, etc.

class TardisWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentWillReceiveProps(nextProps) {
        // We are passing properties here, checking if we have a clothing item selected and render everything.

        if (nextProps.widgetClothingItemID) {
            // Here you would perform a server request etc. to get data related to the clothing item
            // Maybe you will parse all of this from the URL data


            this.getClothingItemInfo ( nextProps.widgetClothingItemID, (clothingItemInfo) => {
                this.setState({
                    loaded: true,
                    clothingItemInfo: clothingItemInfo
                });
            });
        }
    }

    getClothingItemInfo(widgetClothingItemID, cb) {
        let clothingItemInfo = {
            itemID: widgetClothingItemID,
            itemType: widgetClothingItemID,
            title: 'Title of the item',
            defaultSize: 'S',
            sizes: ['XS', 'S', 'M'],
            measurements: TestMeasurements[widgetClothingItemID],
            itemImgUrl: NavItemImagePlaceholder
        }

        cb(clothingItemInfo);
    }

    render () {
        console.log(this.state);

        if (this.state.loaded) {
            return (
                <div className='WidgetWrapper'>
                    <TopNav {...this.state.clothingItemInfo} handleCloseButton={this.props.handleWidgetClose} />
                    <div className="WidgetContentWrapper l-wrap">
                        <ItemSizes {...this.state.clothingItemInfo} />
                        <InformationTable {...this.state.clothingItemInfo} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='WidgetWrapper'>
                    <div>Loading...</div>
                </div>
            );
        }
    }
};

export default TardisWidget;
