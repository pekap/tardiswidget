import React, { Component } from 'react';

const MAX_NUMBER_OF_MEASUREMENTS = 7;

// Measurements:
// 1 - Обхват талии
// 2 - Обхват бедер
// 3 - Длина справа
// 4 - Длина слева

const EMPTY_HOVER_TEXT = ' ';

class SketchSkirt extends Component {
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
                    <g id="Skirt">
                        <g onMouseEnter={this.handleMouseEnter(0)} id="MainShape" transform="translate(52.000000, 61.000000)">
                            <path d="M29.7208912,0 L166.133466,0 C167.696507,0 168.963602,1.6094873 168.963602,3.59489051 L168.963602,13.9839194 C168.963602,18.7445319 169.708011,23.4577334 171.153621,27.8499597 C187.42913,77.3001485 195.566884,127.683744 195.566884,179.000745 C195.566884,179.000745 153.610913,196.878125 98.2101922,196.99938 C98.1158156,197 98.0214777,196.999948 97.9271785,196.999845 C97.8328793,196.999948 97.7385414,197 97.6441649,197 C42.2434437,196.878125 0.287472634,179.000745 0.287472634,179.000745 C0.287472634,127.683744 8.42522697,77.3001485 24.7007356,27.8499597 C26.1463462,23.4577334 26.890755,18.7445319 26.890755,13.9839194 L26.8907548,3.59489051 C26.8907548,1.6094873 28.15785,0 29.7208912,0 Z" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <g id="Decorations" transform="translate(0.000000, 16.000000)">
                                <path d="M133.683033,24.0725874 C139.361002,82.5 153.052179,123.906371 153.052179,175.223373" id="Decoration-4" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M45.0506802,24.0725874 C50.7286491,82.5 64.4198256,123.906371 64.4198256,175.223373" id="Decoration-3" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round" transform="translate(54.735253, 99.647980) scale(-1, 1) translate(-54.735253, -99.647980) "></path>
                                <path d="M194.859376,154.192099 C194.785264,154.225153 194.630488,154.292745 194.396814,154.392576 C194.002019,154.561242 193.531842,154.757554 192.988048,154.979214 C191.427772,155.61521 189.594131,156.325044 187.501244,157.090336 C181.510208,159.281037 174.651017,161.473297 167.036726,163.520192 C145.451357,169.322833 122.212197,172.825031 98.2062405,172.880026 C73.9603248,172.825025 50.5617247,169.322614 28.8873971,163.519733 C21.2420615,161.472842 14.3630178,159.280618 8.36106842,157.089978 C6.26443072,156.324731 4.42843702,155.614947 2.86692425,154.97901 C2.32272464,154.757381 1.85231685,154.5611 1.4574297,154.392468 C1.22373544,154.292671 1.0690096,154.225115 0.994980562,154.192099 C0.0799980957,153.784021 -0.157212992,161.768123 0.0937774802,161.875306 C0.506698231,162.051639 0.995321243,162.25552 1.55792913,162.484646 C3.15872351,163.136581 5.03478908,163.861856 7.17239298,164.642056 C13.2682768,166.866981 20.2449584,169.09032 27.992682,171.164623 C49.9409672,177.040851 73.6320705,180.587045 98.2062804,180.642773 C122.542347,180.587039 146.074865,177.040632 167.934865,171.164164 C175.651091,169.089866 182.607418,166.866561 188.691878,164.641698 C190.825414,163.861543 192.698807,163.136319 194.298047,162.484442 C194.860083,162.255346 195.348308,162.051498 195.760972,161.875198 C196.011773,161.76805 195.774359,153.784021 194.859376,154.192099 Z" id="Decoration-2" fill="#93969E" fill-rule="nonzero" opacity="0.5"></path>
                                <path d="M168.90512,1.25547445 L27.6624728,1.25547445" id="Decoration-1" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </g>
                        <g id="Arrow-1" {...this.getArrowProps(1)} transform="translate(150.000000, 52.000000) rotate(-360.000000) translate(-150.000000, -52.000000) translate(62.000000, 21.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0" y="1.13686838e-13" width="176" height="62"></rect>
                            <path d="M17.6503906,41.1 C17.6503906,49.936556 49.3708412,57.1 88.5,57.1 C127.629159,57.1 159.349609,49.936556 159.349609,41.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M159.349609,41 C159.349609,32.163444 127.629159,25 88.5,25 C49.3708412,25 17.6503906,32.163444 17.6503906,41" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M39.7198467,49.2791696 C39.260632,48.9665428 38.8883649,49.1614779 38.8883649,49.7223052 L38.8883649,56.5015116 C38.8883649,57.0588754 39.2542686,57.2616061 39.7198467,56.9446472 L44.5182411,53.6779693 C44.9774559,53.3653425 44.9838193,52.8628064 44.5182411,52.5458475 L39.7198467,49.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(41.888365, 53.112985) scale(-1, 1) rotate(-18.000000) translate(-41.888365, -53.112985) "></path>
                            <path d="M125.719847,23.2791696 C125.260632,22.9665428 124.888365,23.1614779 124.888365,23.7223052 L124.888365,30.5015116 C124.888365,31.0588754 125.254269,31.2616061 125.719847,30.9446472 L130.518241,27.6779693 C130.977456,27.3653425 130.983819,26.8628064 130.518241,26.5458475 L125.719847,23.2791696 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(127.888365, 27.112985) scale(1, -1) rotate(-14.000000) translate(-127.888365, -27.112985) "></path>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="88" y="15">{labels[1]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-2" {...this.getArrowProps(2)} transform="translate(150.000000, 159.000000) rotate(-360.000000) translate(-150.000000, -159.000000) translate(59.000000, 123.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0.5" y="1.42108547e-13" width="181" height="72"></rect>
                            <path d="M1.24462891,25.1 C1.24462891,33.936556 41.2056197,41.1 90.5,41.1 C139.79438,41.1 179.755371,33.936556 179.755371,25.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M179.755371,26 C179.755371,17.163444 139.79438,10 90.5,10 C41.2056197,10 1.24462891,17.163444 1.24462891,26" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M31.7198467,33.2791696 C31.260632,32.9665428 30.8883649,33.1614779 30.8883649,33.7223052 L30.8883649,40.5015116 C30.8883649,41.0588754 31.2542686,41.2616061 31.7198467,40.9446472 L36.5182411,37.6779693 C36.9774559,37.3653425 36.9838193,36.8628064 36.5182411,36.5458475 L31.7198467,33.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(33.888365, 37.112985) scale(-1, 1) rotate(-18.000000) translate(-33.888365, -37.112985) "></path>
                            <path d="M144.719847,10.2791696 C144.260632,9.96654278 143.888365,10.1614779 143.888365,10.7223052 L143.888365,17.5015116 C143.888365,18.0588754 144.254269,18.2616061 144.719847,17.9446472 L149.518241,14.6779693 C149.977456,14.3653425 149.983819,13.8628064 149.518241,13.5458475 L144.719847,10.2791696 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(146.888365, 14.112985) scale(1, -1) rotate(-14.000000) translate(-146.888365, -14.112985) "></path>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="91" y="63">{labels[2]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-3" {...this.getArrowProps(3)} transform="translate(8.000000, 59.000000)">
                            <path d="M0,175 L34.0053559,0 L70,0 C71.3476156,10.8693809 71.3476156,19.2027142 70,25 C65.1873089,45.7036374 54.9776476,65.7424368 53,79 C50.1917022,97.8259966 46.5250355,131.825997 42,181 L0,175 Z" id="HoverArea" fill-opacity="0.1" fill="#FF0000"></path>
                            <path d="M-37.5,76.5 L-26.0111044,76.5 L-26.0111044,76.5000011 C-23.0562843,76.5000011 -20.1176747,76.9365363 -17.2904504,77.7954685 C32.7115459,92.9864535 83.9750293,101.554631 136.5,103.5" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(49.500000, 90.000000) rotate(-270.000000) translate(-49.500000, -90.000000) "></path>
                            <path d="M34.2529966,171.763561 C33.7937819,171.451677 33.4215147,171.646149 33.4215147,172.205645 L33.4215147,178.968761 C33.4215147,179.524802 33.7874185,179.727051 34.2529966,179.410844 L39.051391,176.15192 C39.5106058,175.840035 39.5169691,175.338692 39.051391,175.022486 L34.2529966,171.763561 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(36.419786, 175.587096) rotate(-265.000000) translate(-36.419786, -175.587096) "></path>
                            <path d="M60.8191988,0.89865582 C60.359984,0.586029013 59.9877169,0.780964141 59.9877169,1.34179143 L59.9877169,8.12099782 C59.9877169,8.67836167 60.3536207,8.88109234 60.8191988,8.56413343 L65.6175932,5.29745553 C66.076808,4.98482873 66.0831713,4.48229263 65.6175932,4.16533372 L60.8191988,0.89865582 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(62.976056, 4.731991) scale(-1, -1) rotate(-270.000000) translate(-62.976056, -4.731991) "></path>
                            <text id="Label" transform="translate(38.092963, 63.085991) rotate(-77.000000) translate(-38.092963, -63.085991) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="16.5929633" y="68.5859914">{labels[3]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-4" {...this.getArrowProps(4)} transform="translate(220.000000, 59.000000)">
                            <path d="M0,175 L34.0053559,0 L70,0 C71.3476156,10.8693809 71.3476156,19.2027142 70,25 C65.1873089,45.7036374 54.9776476,65.7424368 53,79 C50.1917022,97.8259966 46.5250355,131.825997 42,181 L0,175 Z" id="HoverArea" fill-opacity="0.1" fill="#FF0000" transform="translate(35.505356, 90.500000) scale(-1, 1) translate(-35.505356, -90.500000) "></path>
                            <text id="Label" transform="translate(44.165229, 103.464898) rotate(78.000000) translate(-44.165229, -103.464898) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="22.6652289" y="108.964898">{labels[4]}</tspan>
                            </text>
                            <path d="M-64.5,76.5 L-53.0111044,76.5 L-53.0111044,76.5000011 C-50.0562843,76.5000011 -47.1176747,76.9365363 -44.2904504,77.7954685 C5.71154588,92.9864535 56.9750293,101.554631 109.5,103.5" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(22.500000, 90.000000) scale(-1, 1) rotate(-270.000000) translate(-22.500000, -90.000000) "></path>
                            <path d="M34.2529966,171.763561 C33.7937819,171.451677 33.4215147,171.646149 33.4215147,172.205645 L33.4215147,178.968761 C33.4215147,179.524802 33.7874185,179.727051 34.2529966,179.410844 L39.051391,176.15192 C39.5106058,175.840035 39.5169691,175.338692 39.051391,175.022486 L34.2529966,171.763561 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(36.419786, 175.587096) scale(-1, 1) rotate(-265.000000) translate(-36.419786, -175.587096) "></path>
                            <path d="M6.81919881,0.89865582 C6.35998405,0.586029013 5.98771693,0.780964141 5.98771693,1.34179143 L5.98771693,8.12099782 C5.98771693,8.67836167 6.35362066,8.88109234 6.81919881,8.56413343 L11.6175932,5.29745553 C12.076808,4.98482873 12.0831713,4.48229263 11.6175932,4.16533372 L6.81919881,0.89865582 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(8.976056, 4.731991) scale(-1, -1) rotate(-270.000000) translate(-8.976056, -4.731991) "></path>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchSkirt;
