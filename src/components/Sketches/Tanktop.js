import React, { Component } from 'react';

const MAX_NUMBER_OF_MEASUREMENTS = 3;

// Measurements:
// 1 - Обхват груди
// 2 - Длина
// 3 - Длина брютельки

const EMPTY_HOVER_TEXT = ' ';

class SketchTanktop extends Component {
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
                    <g id="Tanktop">
                        <g id="MainShape" onMouseEnter={this.handleMouseEnter(0)} transform="translate(80.000000, 36.000000)">
                            <path d="M70,229 C116.666667,229 140,229 140,229 C127,184 127,107 140,76 C127.59549,57.4682081 126.833723,27.1512154 131.046512,4 C131.046512,4 126.705426,2.66666667 118.023256,0 C108.971588,40.516344 92.9638363,60.8496773 70,61" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M0,229 C46.6666667,229 70,229 70,229 C57,184 57,107 70,76 C57.5954898,57.4682081 56.8337226,27.1512154 61.0465116,4 C61.0465116,4 56.7054264,2.66666667 48.0232558,0 C38.9715882,40.516344 22.9638363,60.8496773 0,61" id="MainShape-Copy" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round" transform="translate(35.000000, 114.500000) scale(-1, 1) translate(-35.000000, -114.500000) "></path>
                            <g id="Decorations" transform="translate(0.000000, 222.000000)" fill="#93969E" opacity="0.5">
                                <polygon id="Decoration-1" points="2 0 138 0 140 6 0 6"></polygon>
                            </g>
                        </g>
                        <g id="Arrow-3" {...this.getArrowProps(3)} transform="translate(186.000000, 29.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0 76 0 0 75 3.6206527e-15 75 76"></polygon>
                            <path d="M-11.5,35.5979797 L45.4020203,35.5979797" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(17.000000, 35.597980) rotate(-270.000000) translate(-17.000000, -35.597980) "></path>
                            <path d="M14.833331,60.2026726 C14.3741163,59.8907879 14.0018492,60.0852603 14.0018492,60.6447564 L14.0018492,67.4078718 C14.0018492,67.9639127 14.3677529,68.1661622 14.833331,67.8499556 L19.6317254,64.5910314 C20.0909402,64.2791467 20.0973036,63.7778034 19.6317254,63.4615968 L14.833331,60.2026726 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(17.000121, 64.026207) rotate(-270.000000) translate(-17.000121, -64.026207) "></path>
                            <path d="M14.8437398,4.63968371 C14.384525,4.3270569 14.0122579,4.52199203 14.0122579,5.08281932 L14.0122579,11.8620257 C14.0122579,12.4193896 14.3781616,12.6221202 14.8437398,12.3051613 L19.6421342,9.03848342 C20.1013489,8.72585661 20.1077123,8.22332052 19.6421342,7.90636161 L14.8437398,4.63968371 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(17.000597, 8.473019) scale(-1, -1) rotate(-270.000000) translate(-17.000597, -8.473019) "></path>
                            <text id="Label" className='anchorLeft' font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="27" y="44">{labels[3]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-2" {...this.getArrowProps(2)} transform="translate(96.000000, 32.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0 167 37 167 37 0 73 0 73 167 109 167 109 210 71 210 71 232 35 232 35 210 0 210"></polygon>
                            <path d="M-56.1340129,119.09798 L165.90202,119.09798" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(54.500000, 118.597980) rotate(-270.000000) translate(-54.500000, -118.597980) "></path>
                            <path d="M51.833331,225.202673 C51.3741163,224.890788 51.0018492,225.08526 51.0018492,225.644756 L51.0018492,232.407872 C51.0018492,232.963913 51.3677529,233.166162 51.833331,232.849956 L56.6317254,229.591031 C57.0909402,229.279147 57.0973036,228.777803 56.6317254,228.461597 L51.833331,225.202673 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(54.000121, 229.026207) rotate(-270.000000) translate(-54.000121, -229.026207) "></path>
                            <path d="M51.8437398,1.63968371 C51.384525,1.3270569 51.0122579,1.52199203 51.0122579,2.08281932 L51.0122579,8.86202571 C51.0122579,9.41938956 51.3781616,9.62212023 51.8437398,9.30516132 L56.6421342,6.03848342 C57.1013489,5.72585661 57.1077123,5.22332052 56.6421342,4.90636161 L51.8437398,1.63968371 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(54.000597, 5.473019) scale(-1, -1) rotate(-270.000000) translate(-54.000597, -5.473019) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="27" y="178" width="54" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="54" y="199">{labels[2]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-1" {...this.getArrowProps(1)} transform="translate(150.500000, 116.000000) rotate(-360.000000) translate(-150.500000, -116.000000) translate(82.000000, 91.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="3" y="1.42108547e-14" width="130" height="50"></rect>
                            <path d="M0,22.1 C0,29.2797017 30.6684946,35.1 68.5,35.1 L68.5,35.1 C106.331505,35.1 137,29.2797017 137,22.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M137,22.1 C137,14.9202983 106.331505,9.1 68.5,9.1 C30.6684946,9.1 0,14.9202983 0,22.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M15.7198467,27.2791696 C15.260632,26.9665428 14.8883649,27.1614779 14.8883649,27.7223052 L14.8883649,34.5015116 C14.8883649,35.0588754 15.2542686,35.2616061 15.7198467,34.9446472 L20.5182411,31.6779693 C20.9774559,31.3653425 20.9838193,30.8628064 20.5182411,30.5458475 L15.7198467,27.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(17.888365, 31.112985) scale(-1, 1) rotate(-18.000000) translate(-17.888365, -31.112985) "></path>
                            <path d="M119.719847,10.2791696 C119.260632,9.96654278 118.888365,10.1614779 118.888365,10.7223052 L118.888365,17.5015116 C118.888365,18.0588754 119.254269,18.2616061 119.719847,17.9446472 L124.518241,14.6779693 C124.977456,14.3653425 124.983819,13.8628064 124.518241,13.5458475 L119.719847,10.2791696 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(121.888365, 14.112985) scale(1, -1) rotate(-14.000000) translate(-121.888365, -14.112985) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="39" y="20" width="59" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="68" y="41">{labels[1]}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchTanktop;
