import React, { Component } from 'react';

const MAX_NUMBER_OF_MEASUREMENTS = 6;

// Measurements:
// 1 - Обхват груди
// 2 - Обхват талии
// 3 - Обхват бедер
// 4 - Длина
// 5 - Длина брютельки

const EMPTY_HOVER_TEXT = ' ';

class SketchDressSleeveless extends Component {
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
                    <g id="DressSleeveless">
                        <g onMouseEnter={this.handleMouseEnter(0)} id="MainShape" transform="translate(82.000000, 22.000000)">
                            <path d="M68.5,48.0138981 C68.3337875,48.0106013 68.1671209,48.0059686 68,48 L68,48.0197909 C49.868327,48.0867296 37.2016624,32.0801326 30,0 L20,3 C25.2740815,23.8304523 23.1737805,42.4362799 13.6990967,58.8174828 C13.2617619,59.5735906 13.1756903,60.4827575 13.4633551,61.3075057 C19.1544517,77.6241437 22,95.5216417 22,115 C22,145 3,168 1,243 C1,243 29.7731235,254.710383 68,254.995176 C68.1668426,254.999634 68.3335098,254.999048 68.5,254.998245 C68.6664902,254.999048 68.8331574,254.999634 69,255 C107.226877,254.710383 136,243 136,243 C134,168 115,145 115,115 C115,95.5216417 117.845548,77.6241437 123.536645,61.3075057 C123.82431,60.4827575 123.738238,59.5735906 123.300912,58.8174779 C113.82622,42.4362799 111.725918,23.8304523 117,3 L107,0 C99.7983376,32.0801326 87.131673,48.0867296 69.0000063,48.0197909 L69,48 C68.8328791,48.0059686 68.6662125,48.0106013 68.5,48.0138981 L68.5,48.0138981 Z" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <g id="Decorations" transform="translate(0.000000, 187.208122)">
                                <path d="M98.5403263,0.278851295 C102.288759,21.7695977 105.980349,41.418416 105.980349,63.7453069" id="Decoration-2" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M31.5403263,0.278851295 C35.2887589,21.7695977 38.9803493,41.418416 38.9803493,63.7453069" id="Decoration-1" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round" transform="translate(35.260338, 32.012079) scale(-1, 1) translate(-35.260338, -32.012079) "></path>
                                <path d="M135.202727,49.0127392 C135.150924,49.0358938 135.042739,49.0832425 134.879406,49.153175 C134.603452,49.2713269 134.274808,49.4088452 133.894707,49.5641197 C132.804106,50.0096393 131.522429,50.5068839 130.059543,51.0429767 C125.871931,52.5775795 121.077496,54.1132738 115.755263,55.5471396 C100.66753,59.6119337 84.4238318,62.06525 67.6441579,62.1037746 C50.6967577,62.0652459 34.3416137,59.6117802 19.191701,55.5468179 C13.8477675,54.1129556 9.0394563,52.5772857 4.84421619,51.042726 C3.37870923,50.5066642 2.0953871,50.0094555 1.00392154,49.5639764 C0.840574023,49.4942113 0.606748566,55.6313735 1,55.7918782 C2.1189226,56.2485638 2.51921482,56.786478 4.01335632,57.3330139 C8.27425471,58.8915905 13.1508127,60.4490569 18.5663135,61.9021218 C33.9077169,66.0184642 50.4673146,68.5026003 67.6441858,68.541638 C84.6546,68.5025962 101.103349,66.0183106 116.383043,61.9018001 C121.776528,60.4487387 126.638859,58.8912967 130.891772,57.3327632 C132.38307,56.7862583 133.692534,56.2782336 134.810369,55.8215885 C135.203221,55.6611053 135.544481,55.5183081 135.832924,55.3948088 C136.008229,55.3197505 135.842282,48.7268774 135.202727,49.0127392 Z" id="Decoration-3" fill="#93969E" fill-rule="nonzero" opacity="0.5"></path>
                            </g>
                        </g>
                        <g {...this.getArrowProps(4)} id="Arrow-4" transform="translate(96.000000, 20.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0 205.797414 37 205.797414 37 0 73 0 73 205.797414 109 205.797414 109 245.577586 71 245.577586 71 259 35 259 35 245.577586 0 245.577586"></polygon>
                            <path d="M-69.5190848,130.483052 L177.519085,130.483052" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(54.000000, 130.483052) rotate(-270.000000) translate(-54.000000, -130.483052) "></path>
                            <path d="M51.833331,251.202673 C51.3741163,250.890788 51.0018492,251.08526 51.0018492,251.644756 L51.0018492,258.407872 C51.0018492,258.963913 51.3677529,259.166162 51.833331,258.849956 L56.6317254,255.591031 C57.0909402,255.279147 57.0973036,254.777803 56.6317254,254.461597 L51.833331,251.202673 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(54.000121, 255.026207) rotate(-270.000000) translate(-54.000121, -255.026207) "></path>
                            <path d="M51.8437398,0.639683707 C51.384525,0.327056901 51.0122579,0.521992028 51.0122579,1.08281932 L51.0122579,7.86202571 C51.0122579,8.41938956 51.3781616,8.62212023 51.8437398,8.30516132 L56.6421342,5.03848342 C57.1013489,4.72585661 57.1077123,4.22332052 56.6421342,3.90636161 L51.8437398,0.639683707 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(54.000597, 4.473019) scale(-1, -1) rotate(-270.000000) translate(-54.000597, -4.473019) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="25" y="210" width="58" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="54" y="231">{labels[4]}</tspan>
                            </text>
                        </g>
                        <g {...this.getArrowProps(5)} id="Arrow-5" transform="translate(175.000000, 15.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0 50 0 0 75 2.38200836e-15 75 50"></polygon>
                            <path d="M-5,29.0979797 L38.9020203,29.0979797" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(17.000000, 29.097980) rotate(-270.000000) translate(-17.000000, -29.097980) "></path>
                            <path d="M14.833331,48.2026726 C14.3741163,47.8907879 14.0018492,48.0852603 14.0018492,48.6447564 L14.0018492,55.4078718 C14.0018492,55.9639127 14.3677529,56.1661622 14.833331,55.8499556 L19.6317254,52.5910314 C20.0909402,52.2791467 20.0973036,51.7778034 19.6317254,51.4615968 L14.833331,48.2026726 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(17.000121, 52.026207) rotate(-270.000000) translate(-17.000121, -52.026207) "></path>
                            <path d="M14.8437398,4.63968371 C14.384525,4.3270569 14.0122579,4.52199203 14.0122579,5.08281932 L14.0122579,11.8620257 C14.0122579,12.4193896 14.3781616,12.6221202 14.8437398,12.3051613 L19.6421342,9.03848342 C20.1013489,8.72585661 20.1077123,8.22332052 19.6421342,7.90636161 L14.8437398,4.63968371 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(17.000597, 8.473019) scale(-1, -1) rotate(-270.000000) translate(-17.000597, -8.473019) "></path>
                            <text id="Label" className='anchorLeft' font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="27" y="34">{labels[5]}</tspan>
                            </text>
                        </g>
                        <g {...this.getArrowProps(3)} id="Arrow-3" transform="translate(176.500000, 205.000000) rotate(-360.000000) translate(-176.500000, -205.000000) translate(85.000000, 184.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0" y="1.42108547e-14" width="183" height="42"></rect>
                            <path d="M4,22.1 C4,29.2797017 31.3106303,35.1 65,35.1 L65,35.1 C98.6893697,35.1 126,29.2797017 126,22.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M126,22.1 C126,14.9202983 98.6893697,9.1 65,9.1 C31.3106303,9.1 4,14.9202983 4,22.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M18.7198467,27.2791696 C18.260632,26.9665428 17.8883649,27.1614779 17.8883649,27.7223052 L17.8883649,34.5015116 C17.8883649,35.0588754 18.2542686,35.2616061 18.7198467,34.9446472 L23.5182411,31.6779693 C23.9774559,31.3653425 23.9838193,30.8628064 23.5182411,30.5458475 L18.7198467,27.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(20.888365, 31.112985) scale(-1, 1) rotate(-18.000000) translate(-20.888365, -31.112985) "></path>
                            <path d="M109.719847,10.2791696 C109.260632,9.96654278 108.888365,10.1614779 108.888365,10.7223052 L108.888365,17.5015116 C108.888365,18.0588754 109.254269,18.2616061 109.719847,17.9446472 L114.518241,14.6779693 C114.977456,14.3653425 114.983819,13.8628064 114.518241,13.5458475 L109.719847,10.2791696 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(111.888365, 14.112985) scale(1, -1) rotate(-14.000000) translate(-111.888365, -14.112985) "></path>
                            <text id="Label" className='anchorLeft' font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="134" y="26">{labels[3]}</tspan>
                            </text>
                        </g>
                        <g {...this.getArrowProps(2)} id="Arrow-2" transform="translate(168.500000, 147.000000) rotate(-360.000000) translate(-168.500000, -147.000000) translate(85.000000, 124.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0" y="1.42108547e-14" width="167" height="46"></rect>
                            <path d="M18.8427734,22.1 C18.8427734,29.2797017 39.787999,35.1 65.6252441,35.1 L65.6252441,35.1 C91.4624893,35.1 112.407715,29.2797017 112.407715,22.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M112.407715,22.1 C112.407715,14.9202983 91.4624893,9.1 65.6252441,9.1 C39.787999,9.1 18.8427734,14.9202983 18.8427734,22.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M29.7198467,27.2791696 C29.260632,26.9665428 28.8883649,27.1614779 28.8883649,27.7223052 L28.8883649,34.5015116 C28.8883649,35.0588754 29.2542686,35.2616061 29.7198467,34.9446472 L34.5182411,31.6779693 C34.9774559,31.3653425 34.9838193,30.8628064 34.5182411,30.5458475 L29.7198467,27.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(31.888365, 31.112985) scale(-1, 1) rotate(-18.000000) translate(-31.888365, -31.112985) "></path>
                            <path d="M95.7198467,9.27916958 C95.260632,8.96654278 94.8883649,9.16147791 94.8883649,9.72230519 L94.8883649,16.5015116 C94.8883649,17.0588754 95.2542686,17.2616061 95.7198467,16.9446472 L100.518241,13.6779693 C100.977456,13.3653425 100.983819,12.8628064 100.518241,12.5458475 L95.7198467,9.27916958 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(97.888365, 13.112985) scale(1, -1) rotate(-14.000000) translate(-97.888365, -13.112985) "></path>
                            <text id="Label" className='anchorLeft' font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="120" y="27">{labels[2]}</tspan>
                            </text>
                        </g>
                        <g {...this.getArrowProps(1)} id="Arrow-1" transform="translate(150.000000, 90.000000) rotate(-360.000000) translate(-150.000000, -90.000000) translate(85.000000, 65.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0" y="1.42108547e-14" width="130" height="50"></rect>
                            <path d="M11.3325195,22.1 C11.3325195,29.2797017 35.360269,35.1 65,35.1 L65,35.1 C94.639731,35.1 118.66748,29.2797017 118.66748,22.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M118.66748,22.1 C118.66748,14.9202983 94.639731,9.1 65,9.1 C35.360269,9.1 11.3325195,14.9202983 11.3325195,22.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M23.7198467,27.2791696 C23.260632,26.9665428 22.8883649,27.1614779 22.8883649,27.7223052 L22.8883649,34.5015116 C22.8883649,35.0588754 23.2542686,35.2616061 23.7198467,34.9446472 L28.5182411,31.6779693 C28.9774559,31.3653425 28.9838193,30.8628064 28.5182411,30.5458475 L23.7198467,27.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(25.888365, 31.112985) scale(-1, 1) rotate(-18.000000) translate(-25.888365, -31.112985) "></path>
                            <path d="M101.719847,9.27916958 C101.260632,8.96654278 100.888365,9.16147791 100.888365,9.72230519 L100.888365,16.5015116 C100.888365,17.0588754 101.254269,17.2616061 101.719847,16.9446472 L106.518241,13.6779693 C106.977456,13.3653425 106.983819,12.8628064 106.518241,12.5458475 L101.719847,9.27916958 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(103.888365, 13.112985) scale(1, -1) rotate(-14.000000) translate(-103.888365, -13.112985) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="36" y="20" width="59" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="65" y="41">{labels[1]}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchDressSleeveless;
