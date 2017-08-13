import React, { Component } from 'react';

import TardisWidget from './components/TardisWidget';

class App extends Component {
    constructor(p) {
        super(p);

        this.state = {
            loaded: false,
            widgetOpened: false,
            widgetClothingItemID: null
        }

        this.closeWidget = this.closeWidget.bind(this);
        this.openWidget = this.openWidget.bind(this);
    }

    componentDidMount() {
        this.setState({
            loaded: true
        });
    }

    closeWidget() {
        this.setState ({
            widgetOpened: false
        })
    }

    openWidget(clothingItem) {
        return () => {
            this.setState ({
                widgetOpened: true,
                widgetClothingItemID: clothingItem
            });
        }
    }

    render() {
        let openedClass = (this.state.widgetOpened ? 'opened' : '');
        let loadedClass = (this.state.loaded ? 'is-Loaded' : '');

        return (
            <div id='TardisWrapper' className={openedClass}>
                <div id='TardisWrapperOverlay' onClick={this.closeWidget}></div>

                <div className='ClothingItemChoices'>
                    <div onClick={this.openWidget('tshirt')}>Футболка</div>
                    <div onClick={this.openWidget('pants')}>Штаны</div>
                    <div onClick={this.openWidget('blouse')}>Кофта</div>
                    <div onClick={this.openWidget('dress')}>Платье</div>
                    <div onClick={this.openWidget('dresssleeveless')}>Платье без рукавов</div>
                    <div onClick={this.openWidget('shorts')}>Шорты</div>
                    <div onClick={this.openWidget('skirt')}>Юбка</div>
                    <div onClick={this.openWidget('tanktop')}>Майка</div>
                </div>

                <div id='TardisWidget'>
                    <div id='page-wrapper' className={loadedClass}>
                        <TardisWidget handleWidgetClose={this.closeWidget} widgetOpened={this.state.widgetOpened} widgetClothingItemID={this.state.widgetClothingItemID} />
                    </div>
                </div>
            </div>
    );
  }
}

export default App;
