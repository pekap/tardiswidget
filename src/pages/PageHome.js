import React, { Component } from 'react';
// import {CSSTransitionGroup} from 'react-transition-group';

import TopNav from '../components/TopNav';
import ItemSizes from '../components/ItemSizes';
import InformationTable from '../components/InformationTable';

// import InlineSVG from 'react-inlinesvg';
// import ImagePGP from '../img/PGP.svg';



class PageHome extends Component {
    render () {
        return (
            <div className='WidgetWrapper'>
                <TopNav/>
                <div className="WidgetContentWrapper l-wrap">

                    <ItemSizes defaultSize={2} sizes={['XS', 'S', 'M']} />
                    <InformationTable />

                </div>
            </div>
        );
    }
};

export default PageHome;
