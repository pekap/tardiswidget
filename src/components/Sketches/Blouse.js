import React, { Component } from 'react';

const MAX_NUMBER_OF_MEASUREMENTS = 4;

// Measurements:
// 1 - Обхват груди
// 2 - Длина
// 3 - Рукав от горла
// 4 - Рукав от плеча

const EMPTY_HOVER_TEXT = ' ';

class SketchBlouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoveredArrow: 0 // no arrow hovered in the beginning
        }

        this.generateLabels();

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    isHovered(i) {
        return (this.state.hoveredArrow === i ?  true : false);
    }

    isHidden(i) {
        return (this.labels[i] ? false : true);
    }

    handleMouseEnter(n) {
        return (e) => {
            // n - number of the arrow
            e.stopPropagation();

            this.setState({
                hoveredArrow: n
            });

            let text = (n == 0 ? EMPTY_HOVER_TEXT : this.props.measurements[n].title);

            this.props.handleHoverArrow(text);
        };
    }

    generateLabels() {
        let m = this.props.measurements;
        let labels = [];

        for (let i = 1; i <= MAX_NUMBER_OF_MEASUREMENTS; i++) {
            if (m[i]) {
                labels[i] = m[i].value;
            } else {
                labels[i] = null
            }
        }

        this.labels = labels;
    }

    getArrowProps(i) {
        return {
            className: (this.isHovered(i) ? 'hovered' : '') + ' ' + (this.isHidden(i) ? 'hidden' : ''),
            onMouseEnter: this.handleMouseEnter(i)
        };
    }

    render() {
        let labels = this.labels;

        return (
            <svg onMouseLeave={this.handleMouseEnter(0)} width="300px" height="300px" viewBox="0 0 300 300" version="1.1">
                <g id="Sketches" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Blouse">
                        <g id="MainShape" onMouseEnter={this.handleMouseEnter(0)} transform="translate(13.000000, 64.000000)">
                            <path d="M83.1030087,192 L83.1030087,71.9531102 C83.1030087,71.4008255 82.6552934,70.9531102 82.1030087,70.9531102 C81.6889482,70.9531102 81.3177135,71.2082898 81.1693798,71.5948686 L37.7200299,181.830078 L0,168.433594 L46.2268538,41.9076836 C51.1530836,28.4242717 61.6369687,17.7086122 75.0094536,12.4887672 L107.003861,0 C115.130183,8.15268093 125.701976,13.3269485 137.5,13.4693184 C149.298024,13.3269485 159.869817,8.15268093 167.18899,0 L199.990546,12.4887672 C213.363031,17.7086122 223.846916,28.4242717 228.773146,41.9076836 L275,168.433594 L237.27997,181.830078 L193.83062,71.5948686 C193.682287,71.2082898 193.311052,70.9531102 192.896991,70.9531102 C192.344707,70.9531102 191.896991,71.4008255 191.896991,71.9531102 L191.896991,192 L83.1030087,192 Z" id="Combined-Shape" stroke="#93969E" stroke-width="2" fill="#F4F4F5" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                            <g id="Decorations" transform="translate(0.000000, 7.000000)" fill="#93969E" opacity="0.5">
                                <rect id="Decoration-3" x="84" y="179" width="109" height="5"></rect>
                                <rect id="Decoration-2" transform="translate(255.000000, 165.500000) rotate(-20.000000) translate(-255.000000, -165.500000) " x="235" y="163" width="40" height="5"></rect>
                                <rect id="Decoration-1" transform="translate(20.000000, 165.500000) scale(-1, 1) rotate(-20.000000) translate(-20.000000, -165.500000) " x="0" y="163" width="40" height="5"></rect>
                            </g>
                        </g>
                        <g {...this.getArrowProps(2)} id="Arrow-2" transform="translate(96.000000, 56.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0 134 37 134 37 0 73 6.38378239e-15 73 134 109 134 109 177 71 177 71 199 35 199 35 177 0 177"></polygon>
                            <path d="M-31.0979797,111.09798 L140.90202,111.09798" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(54.500000, 110.597980) rotate(-270.000000) translate(-54.500000, -110.597980) "></path>
                            <path d="M51.833331,192.202673 C51.3741163,191.890788 51.0018492,192.08526 51.0018492,192.644756 L51.0018492,199.407872 C51.0018492,199.963913 51.3677529,200.166162 51.833331,199.849956 L56.6317254,196.591031 C57.0909402,196.279147 57.0973036,195.777803 56.6317254,195.461597 L51.833331,192.202673 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(54.000121, 196.026207) rotate(-270.000000) translate(-54.000121, -196.026207) "></path>
                            <path d="M51.8437398,21.6396837 C51.384525,21.3270569 51.0122579,21.521992 51.0122579,22.0828193 L51.0122579,28.8620257 C51.0122579,29.4193896 51.3781616,29.6221202 51.8437398,29.3051613 L56.6421342,26.0384834 C57.1013489,25.7258566 57.1077123,25.2233205 56.6421342,24.9063616 L51.8437398,21.6396837 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(54.000597, 25.473019) scale(-1, -1) rotate(-270.000000) translate(-54.000597, -25.473019) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="27" y="145" width="54" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="54" y="166">{labels[2]}</tspan>
                            </text>
                        </g>
                        <g {...this.getArrowProps(1)} id="Arrow-1" transform="translate(150.000000, 135.000000) rotate(-360.000000) translate(-150.000000, -135.000000) translate(85.000000, 110.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0" y="1.42108547e-14" width="130" height="50"></rect>
                            <path d="M10.5,24.1 C10.5,31.2797017 34.9004811,37.1 65,37.1 L65,37.1 C95.0995189,37.1 119.5,31.2797017 119.5,24.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M119.5,24.1 C119.5,16.9202983 95.0995189,11.1 65,11.1 C34.9004811,11.1 10.5,16.9202983 10.5,24.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M19.7198467,28.2791696 C19.260632,27.9665428 18.8883649,28.1614779 18.8883649,28.7223052 L18.8883649,35.5015116 C18.8883649,36.0588754 19.2542686,36.2616061 19.7198467,35.9446472 L24.5182411,32.6779693 C24.9774559,32.3653425 24.9838193,31.8628064 24.5182411,31.5458475 L19.7198467,28.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(21.888365, 32.112985) scale(-1, 1) rotate(-18.000000) translate(-21.888365, -32.112985) "></path>
                            <path d="M102.719847,11.2791696 C102.260632,10.9665428 101.888365,11.1614779 101.888365,11.7223052 L101.888365,18.5015116 C101.888365,19.0588754 102.254269,19.2616061 102.719847,18.9446472 L107.518241,15.6779693 C107.977456,15.3653425 107.983819,14.8628064 107.518241,14.5458475 L102.719847,11.2791696 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(104.888365, 15.112985) scale(1, -1) rotate(-14.000000) translate(-104.888365, -15.112985) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="36" y="20" width="59" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="64" y="41">{labels[1]}</tspan>
                            </text>
                        </g>
                        <g {...this.getArrowProps(3)} id="Arrow-3" transform="translate(2.000000, 23.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="2.27373675e-13 182.240234 46.6210938 30.7871094 126.371094 0.34375 154.392578 25.2832031 154.392578 52.6074219 116.691406 52.6074219 73.7617188 77.5917969 22.9472656 218 2.27373675e-13 218"></polygon>
                            <path d="M5.5078125,204.625 L50.2002209,82.448482 L50.2002209,82.448482 C56.2653476,65.8681256 69.3249582,52.8004865 85.901584,46.7251712 L112.20202,37.0860898 L112.20202,37.0860898 C115.508949,35.874104 119.003465,35.2539063 122.525495,35.2539063 L146,35.2539062" id="Path" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M3.48298779,200.897341 C3.02377303,200.584714 2.65150592,200.779649 2.65150592,201.340476 L2.65150592,208.119683 C2.65150592,208.677046 3.01740965,208.879777 3.48298779,208.562818 L8.28138218,205.29614 C8.74059694,204.983514 8.74696032,204.480977 8.28138218,204.164019 L3.48298779,200.897341 Z" id="ArrowHead-1" fill="#008AF3" transform="translate(5.651506, 204.731156) scale(-1, 1) rotate(70.000000) translate(-5.651506, -204.731156) "></path>
                            <path d="M143.642771,31.3203645 C143.183556,31.0077377 142.811289,31.2026729 142.811289,31.7635001 L142.811289,38.5427065 C142.811289,39.1000704 143.177192,39.3028011 143.642771,38.9858421 L148.441165,35.7191642 C148.90038,35.4065374 148.906743,34.9040013 148.441165,34.5870424 L143.642771,31.3203645 Z" id="ArrowHead-2" fill="#008AF3"></path>
                            <text id="Label" transform="translate(106.065060, 24.768883) rotate(-19.000000) translate(-106.065060, -24.768883) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="84.5650602" y="30.2688831">{labels[3]}</tspan>
                            </text>
                        </g>
                        <g {...this.getArrowProps(4)} id="Arrow-4" transform="translate(192.000000, 47.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" transform="translate(53.453125, 97.434570) scale(-1, 1) translate(-53.453125, -97.434570) " points="0.513671875 158.240234 19.6464844 30.7207031 90.5078125 0.869140625 106.392578 30.7207031 74.2753906 53.5917969 23.4609375 194 0.513671875 194"></polygon>
                            <path d="M21.6062285,180.625 L66.2986369,58.448482 L66.2986369,58.448482 C72.3637636,41.8681256 85.4233742,28.8004865 102,22.7251712 L102,22.7251712" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(61.803114, 101.675086) scale(-1, 1) translate(-61.803114, -101.675086) "></path>
                            <path d="M99.4829878,176.897341 C99.023773,176.584714 98.6515059,176.779649 98.6515059,177.340476 L98.6515059,184.119683 C98.6515059,184.677046 99.0174096,184.879777 99.4829878,184.562818 L104.281382,181.29614 C104.740597,180.983514 104.74696,180.480977 104.281382,180.164019 L99.4829878,176.897341 Z" id="ArrowHead-1" fill="#008AF3" transform="translate(101.651506, 180.731156) rotate(70.000000) translate(-101.651506, -180.731156) "></path>
                            <path d="M20.8314819,19.166185 C20.3722671,18.8535582 20,19.0484933 20,19.6093206 L20,26.388527 C20,26.9458908 20.3659037,27.1486215 20.8314819,26.8316626 L25.6298763,23.5649847 C26.089091,23.2523579 26.0954544,22.7498218 25.6298763,22.4328629 L20.8314819,19.166185 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(23.000000, 23.000000) rotate(-152.000000) translate(-23.000000, -23.000000) "></path>
                            <text id="Label" transform="translate(78.065060, 78.768883) rotate(69.000000) translate(-78.065060, -78.768883) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="56.5650602" y="84.2688831">{labels[4]}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchBlouse;
