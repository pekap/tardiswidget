import React, { Component } from 'react';

const ARROW_EXPLANATION = {
    '1': 'Обхват груди',
    '2': 'Длина',
    '3': 'Рукав от плеча',
    '4': 'Рукав от горла'
};

class SketchTshirt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoveredArrow: 0 // no arrow hovered in the beginning
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    isHovered(i) {
        return (this.state.hoveredArrow === i ?  true : false);
    }

    handleMouseEnter(n) {
        return () => {
            // n - number of the arrow
            this.setState({
                hoveredArrow: n
            });

            this.props.handleHoverArrow(ARROW_EXPLANATION[n]);
        };
    }

    render() {
        let labels = {
            '1': '32.5см',
            '2': '50.1см',
            '3': '15.9см',
            '4': '23.1см'
        }
        return (
            <svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Sketches" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="TShirt">
                        <g id="MainShape" transform="translate(30.000000, 42.000000)">
                            <path d="M194.2821,16.5779232 L154.920419,1 L154.011044,1 C145.648568,10.3011442 133.517409,16.1563754 119.998584,16.1563754 C106.479759,16.1563754 94.3476405,10.3011442 85.9765242,1 L85.0671493,1 L45.699281,16.5769011 L45.699281,16.5769011 C43.2381022,17.5507292 40.9947013,19.0034004 39.0991255,20.8507052 L0,58.9541661 L44.8411516,94.6731802 L58.1535785,82.4676099 L58.1535785,216.990662 L120.00096,217 L181.848342,217 L181.848342,82.4769478 L195.142049,94.6825182 L240,58.9539414 L200.877041,20.8474671 L200.877041,20.8474671 C198.982622,19.002268 196.741069,17.5510935 194.2821,16.5779232 Z" stroke="#93969E" strokeWidth="2" fill="#F4F4F5" fillRule="nonzero" strokeLinecap="round" strokeLinejoin="round"></path>
                            <g id="Decorations">
                                <polygon id="Decoration-1" fill="#93969E" opacity="0.5" points="191.586426 91.6064453 236.772949 55.9121094 239.906738 58.7348633 195.107422 94.9584961"></polygon>
                                <polygon id="Decoration-2" fill="#93969E" opacity="0.5" transform="translate(24.746582, 75.435303) scale(-1, 1) translate(-24.746582, -75.435303) " points="0.586425781 91.6064453 45.7729492 55.9121094 48.9067383 58.7348633 4.10742188 94.9584961"></polygon>
                                <path d="M85.8041992,0.977539062 C97.4379883,4.20768229 108.94987,5.82275391 120.339844,5.82275391 C131.729818,5.82275391 142.976888,4.20768229 154.081055,0.977539062" id="Decoration-4" stroke="#93969E" strokeWidth="2"></path>
                                <rect id="Decoration-3" fill="#93969E" opacity="0.5" x="58" y="211" width="123" height="6"></rect>
                            </g>
                        </g>
                        <g id="Arrow-4" className={this.isHovered(4) ? 'hovered' : ''} transform="translate(232.000000, 52.000000)" onMouseEnter={this.handleMouseEnter(4)}>
                            <path d="M-2.62120577,23.9751771 L50.8258482,23.9751771" id="Path" stroke="#9ED0FB" strokeWidth="2" transform="translate(24.102321, 23.975177) rotate(45.000000) translate(-24.102321, -23.975177) "></path>
                            <path d="M39.7695301,37.9770891 C39.3103153,37.6644623 38.9380482,37.8593974 38.9380482,38.4202247 L38.9380482,45.1994311 C38.9380482,45.7567949 39.3039519,45.9595256 39.7695301,45.6425667 L44.5679244,42.3758888 C45.0271392,42.063262 45.0335026,41.5607259 44.5679244,41.243767 L39.7695301,37.9770891 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(41.938048, 41.810904) rotate(45.000000) translate(-41.938048, -41.810904) "></path>
                            <path d="M3.39096933,1.59852835 C2.93175457,1.28590155 2.55948746,1.48083668 2.55948746,2.04166396 L2.55948746,8.82087036 C2.55948746,9.3782342 2.92539119,9.58096488 3.39096933,9.26400597 L8.18936372,5.99732807 C8.64857848,5.68470126 8.65494186,5.18216516 8.18936372,4.86520625 L3.39096933,1.59852835 Z" id="ArrowHead-1" fill="#008AF3" transform="translate(5.559487, 5.432343) scale(-1, 1) rotate(-45.000000) translate(-5.559487, -5.432343) "></path>
                            <g id="Label" transform="translate(47.525891, 29.684777) rotate(46.000000) translate(-33.525891, -27.684777) translate(5.525891, 18.184777)" fontSize="14" fontFamily="Roboto" fill="#008AF3" fontWeight="bold">
                                <text textAnchor='middle'>
                                    <tspan  textAnchor='middle' x="6.99658203" y="15">{labels[4]}</tspan>
                                </text>
                            </g>
                        </g>
                        <g id="Arrow-3" className={this.isHovered(3) ? 'hovered' : ''} onMouseEnter={this.handleMouseEnter(3)} transform="translate(70.318462, 64.967058) rotate(-46.000000) translate(-70.318462, -64.967058) translate(15.318462, 49.467058)">
                            <path d="M2.5,4.5 L59.6920663,5.69727112 L59.6920663,5.69727112 C61.0326443,5.72533507 62.3538875,6.02271686 63.577212,6.57172901 L103.928419,24.6808277" id="Path" stroke="#9ED0FB" strokeWidth="2"></path>
                            <path d="M102.52614,20.9855248 C102.066925,20.672898 101.694658,20.8678331 101.694658,21.4286604 L101.694658,28.2078668 C101.694658,28.7652306 102.060562,28.9679613 102.52614,28.6510024 L107.324535,25.3843245 C107.783749,25.0716977 107.790113,24.5691616 107.324535,24.2522027 L102.52614,20.9855248 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(104.694658, 24.819340) rotate(23.000000) translate(-104.694658, -24.819340) "></path>
                            <path d="M0.831481878,0.666184992 C0.372267117,0.353558186 0,0.548493314 0,1.1093206 L0,7.88852699 C0,8.44589084 0.36590373,8.64862151 0.831481878,8.33166261 L5.62987626,5.06498471 C6.08909102,4.7523579 6.09545441,4.2498218 5.62987626,3.93286289 L0.831481878,0.666184992 Z" id="ArrowHead-1" fill="#008AF3" transform="translate(3.000000, 4.500000) scale(-1, 1) translate(-3.000000, -4.500000) "></path>
                            <g id="Label" transform="translate(41.492599, 9.791356) rotate(1) translate(-25.492599, -27.791356) translate(13.492599, 0.291356)" fontSize="14" fontFamily="Roboto" fill="#008AF3" fontWeight="bold">
                                <text textAnchor='middle'>
                                    <tspan textAnchor='middle' x="6.99658203" y="15">{labels[3]}</tspan>
                                </text>
                            </g>
                        </g>
                        <g id="Arrow-2" className={this.isHovered(2) ? 'hovered' : ''} onMouseEnter={this.handleMouseEnter(2)} transform="translate(146.000000, 58.000000)">
                            <path d="M-93.4510101,100.45101 L102.45101,100.45101" id="Path" stroke="#9ED0FB" strokeWidth="2" transform="translate(4.500000, 100.451010) rotate(-270.000000) translate(-4.500000, -100.451010) "></path>
                            <path d="M2.33148188,193.068205 C1.87226712,192.755578 1.5,192.950514 1.5,193.511341 L1.5,200.290547 C1.5,200.847911 1.86590373,201.050642 2.33148188,200.733683 L7.12987626,197.467005 C7.58909102,197.154378 7.59545441,196.651842 7.12987626,196.334883 L2.33148188,193.068205 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(4.500000, 196.902020) rotate(-270.000000) translate(-4.500000, -196.902020) "></path>
                            <path d="M2.33148188,-0.833815008 C1.87226712,-1.14644181 1.5,-0.951506686 1.5,-0.390679397 L1.5,6.38852699 C1.5,6.94589084 1.86590373,7.14862151 2.33148188,6.83166261 L7.12987626,3.56498471 C7.58909102,3.2523579 7.59545441,2.7498218 7.12987626,2.43286289 L2.33148188,-0.833815008 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(4.500000, 3.000000) scale(-1, -1) rotate(-270.000000) translate(-4.500000, -3.000000) "></path>
                            <g id="Label" transform="translate(0.000000, 147.000000)">
                                <rect id="Background" fill="#F4F4F5" x="2" y="0" width="54" height="30"></rect>
                                <text textAnchor='middle' fontFamily="Roboto" fontSize="14" fontWeight="bold" fill="#008AF3">
                                    <tspan textAnchor='middle' x="6.99658203" y="20">{labels[2]}</tspan>
                                </text>
                            </g>
                        </g>
                        <g id="Arrow-1" className={this.isHovered(1) ? 'hovered' : ''} onMouseEnter={this.handleMouseEnter(1)} transform="translate(150.000000, 122.500000) rotate(-360.000000) translate(-150.000000, -122.500000) translate(89.000000, 109.000000)">
                            <path d="M0,13.1 C0,20.2797017 27.3106303,26.1 61,26.1 L61,26.1 C94.6893697,26.1 122,20.2797017 122,13.1" id="Path--Front" stroke="#9ED0FB" strokeWidth="2"></path>
                            <path d="M122,13.1 C122,5.92029825 94.6893697,0.1 61,0.1 C27.3106303,0.1 0,5.92029825 0,13.1" id="Path--Back" stroke="#9ED0FB" strokeWidth="2" strokeLinecap="round" strokeDasharray="5,15"></path>
                            <path d="M14.7198467,18.2791696 C14.260632,17.9665428 13.8883649,18.1614779 13.8883649,18.7223052 L13.8883649,25.5015116 C13.8883649,26.0588754 14.2542686,26.2616061 14.7198467,25.9446472 L19.5182411,22.6779693 C19.9774559,22.3653425 19.9838193,21.8628064 19.5182411,21.5458475 L14.7198467,18.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(16.888365, 22.112985) scale(-1, 1) rotate(-18.000000) translate(-16.888365, -22.112985) "></path>
                            <path d="M105.719847,1.27916958 C105.260632,0.966542778 104.888365,1.16147791 104.888365,1.72230519 L104.888365,8.50151159 C104.888365,9.05887543 105.254269,9.26160611 105.719847,8.9446472 L110.518241,5.6779693 C110.977456,5.36534249 110.983819,4.86280639 110.518241,4.54584748 L105.719847,1.27916958 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(107.888365, 5.112985) scale(1, -1) rotate(-14.000000) translate(-107.888365, -5.112985) "></path>
                            <g id="Label" transform="translate(34.000000, 11.000000)">
                                <rect id="Background" fill="#F4F4F5" x="2" y="0" width="54" height="30"></rect>
                                <text textAnchor='middle' fontFamily="Roboto" fontSize="14" transform="translate(20.000000, 0.000000)" fontWeight="bold" fill="#008AF3">
                                    <tspan textAnchor='middle' x="6.99658203" y="20">{labels[1]}</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchTshirt;
