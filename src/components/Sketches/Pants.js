import React, { Component } from 'react';

const MAX_NUMBER_OF_MEASUREMENTS = 7;

// Measurements:
// 1 - Обхват талии
// 2 - Обхват бедер
// 3 - Высота
// 4 - Длина внутри
// 5 - Внешняя длина
// 6 - Обхват бедра
// 7 - Обхват колена

const EMPTY_HOVER_TEXT = ' ';

class SketchPants extends Component {
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
                    <g id="Pants">
                        <g id="MainShape" onMouseEnter={this.handleMouseEnter(0)} transform="translate(74.000000, 38.000000)">
                            <path d="M26.0117188,7.38671875 L1,229.239437 L44.4811658,235 L62.2625078,102.991838 C62.9627268,97.0902589 64.9691845,91.4188635 68.1360202,86.3899376 L76.5,73.1079621 L84.8639798,86.3899376 C88.0308155,91.4188635 90.0372732,97.0902589 90.7374922,102.991838 L108.518834,235 L152,229.239437 L126.318359,7.38671875 L26.0117188,7.38671875 Z" id="Combined-Shape" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <g id="Decorations">
                                <rect id="Decoration-5" fill="#93969E" opacity="0.5" transform="translate(23.000000, 229.500000) scale(-1, 1) rotate(-7.000000) translate(-23.000000, -229.500000) " x="1" y="227" width="44" height="5"></rect>
                                <rect id="Decoration-4" fill="#93969E" opacity="0.5" transform="translate(129.000000, 229.500000) rotate(-7.000000) translate(-129.000000, -229.500000) " x="107" y="227" width="44" height="5"></rect>
                            </g>
                        </g>
                        <g id="Arrow-4" {...this.getArrowProps(4)} transform="translate(119.000000, 116.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0.411132812 158 16.09375 25.8232422 27 0 44 17 64 158"></polygon>
                            <polyline id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(45.500000, 80.691111) rotate(-270.000000) translate(-45.500000, -80.691111) " points="-30.1911107 94.1911107 -16.1911107 86.1911107 121.191111 67.1911107"></polyline>
                            <path d="M56.833331,152.202673 C56.3741163,151.890788 56.0018492,152.08526 56.0018492,152.644756 L56.0018492,159.407872 C56.0018492,159.963913 56.3677529,160.166162 56.833331,159.849956 L61.6317254,156.591031 C62.0909402,156.279147 62.0973036,155.777803 61.6317254,155.461597 L56.833331,152.202673 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(59.000121, 156.026207) rotate(-279.000000) translate(-59.000121, -156.026207) "></path>
                            <path d="M29.8253281,1.15500327 C29.3661133,0.842376468 28.9938462,1.0373116 28.9938462,1.59813888 L28.9938462,8.37734528 C28.9938462,8.93470912 29.3597499,9.1374398 29.8253281,8.82048089 L34.6237225,5.55380299 C35.0829372,5.24117618 35.0893006,4.73864008 34.6237225,4.42168117 L29.8253281,1.15500327 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(31.982185, 4.988339) scale(-1, -1) rotate(-305.000000) translate(-31.982185, -4.988339) "></path>
                            <text id="Label" transform="translate(39.878837, 107.868619) rotate(82.000000) translate(-39.878837, -107.868619) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="18.3788369" y="113.368619">{labels[4]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-5" {...this.getArrowProps(5)} transform="translate(42.000000, 44.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0 218 27 0 58 7 35 225"></polygon>
                            <path d="M-69.5,100.5 L148.5,125.5" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(39.500000, 113.000000) rotate(-270.000000) translate(-39.500000, -113.000000) "></path>
                            <path d="M24.2529966,218.763561 C23.7937819,218.451677 23.4215147,218.646149 23.4215147,219.205645 L23.4215147,225.968761 C23.4215147,226.524802 23.7874185,226.727051 24.2529966,226.410844 L29.051391,223.15192 C29.5106058,222.840035 29.5169691,222.338692 29.051391,222.022486 L24.2529966,218.763561 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(26.419786, 222.587096) rotate(-260.000000) translate(-26.419786, -222.587096) "></path>
                            <path d="M49.8191988,1.89865582 C49.359984,1.58602901 48.9877169,1.78096414 48.9877169,2.34179143 L48.9877169,9.12099782 C48.9877169,9.67836167 49.3536207,9.88109234 49.8191988,9.56413343 L54.6175932,6.29745553 C55.076808,5.98482873 55.0831713,5.48229263 54.6175932,5.16533372 L49.8191988,1.89865582 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(51.976056, 5.731991) scale(-1, -1) rotate(-262.000000) translate(-51.976056, -5.731991) "></path>
                            <text id="Label" transform="translate(28.419130, 90.159616) rotate(-83.000000) translate(-28.419130, -90.159616) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="6.91913016" y="95.6596161">{labels[5]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-1" {...this.getArrowProps(1)} transform="translate(150.000000, 37.000000) rotate(-360.000000) translate(-150.000000, -37.000000) translate(99.000000, 12.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="1" y="0" width="101" height="50"></rect>
                            <path d="M0.5,34.1 C0.5,41.2797017 23.1096201,47.1 51,47.1 L51,47.1 C78.8903799,47.1 101.5,41.2797017 101.5,34.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M101.5,34.1 C101.5,26.9202983 78.8903799,21.1 51,21.1 C23.1096201,21.1 0.5,26.9202983 0.5,34.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M9.71984673,38.2791696 C9.26063197,37.9665428 8.88836486,38.1614779 8.88836486,38.7223052 L8.88836486,45.5015116 C8.88836486,46.0588754 9.25426859,46.2616061 9.71984673,45.9446472 L14.5182411,42.6779693 C14.9774559,42.3653425 14.9838193,41.8628064 14.5182411,41.5458475 L9.71984673,38.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(11.888365, 42.112985) scale(-1, 1) rotate(-18.000000) translate(-11.888365, -42.112985) "></path>
                            <path d="M85.7198467,21.2791696 C85.260632,20.9665428 84.8883649,21.1614779 84.8883649,21.7223052 L84.8883649,28.5015116 C84.8883649,29.0588754 85.2542686,29.2616061 85.7198467,28.9446472 L90.5182411,25.6779693 C90.9774559,25.3653425 90.9838193,24.8628064 90.5182411,24.5458475 L85.7198467,21.2791696 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(87.888365, 25.112985) scale(1, -1) rotate(-14.000000) translate(-87.888365, -25.112985) "></path>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="51" y="15">{labels[1]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-7" {...this.getArrowProps(7)} transform="translate(222.987882, 192.797290) rotate(-366.000000) translate(-222.987882, -192.797290) translate(171.487882, 166.297290)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0.25 -5.68434189e-14 102.006049 1.48562339 97.0118545 49.0022091 0.25 53"></polygon>
                            <path d="M0.0920374054,20.1100278 C0.0920374054,25.0253621 10.4914863,29 23.125,29 C35.7585137,29 45.6807496,25.0804104 45.6807496,20.1650761" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M45.6720061,20.1887057 C45.6720061,14.9626813 35.7585137,10.6374459 23.125,10.6374459 C10.4914863,10.6374459 0.25,14.8739757 0.25,20.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M5.86864451,23.4399389 C5.40942975,23.1273121 5.03716263,23.3222472 5.03716263,23.8830745 L5.03716263,30.6622809 C5.03716263,31.2196447 5.40306636,31.4223754 5.86864451,31.1054165 L10.6670389,27.8387386 C11.1262537,27.5261118 11.132617,27.0235757 10.6670389,26.7066168 L5.86864451,23.4399389 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(8.037163, 27.273754) scale(-1, 1) rotate(-18.000000) translate(-8.037163, -27.273754) "></path>
                            <path d="M30.4163286,8.07064053 C29.9571138,7.75801372 29.5848467,7.95294885 29.5848467,8.51377614 L29.5848467,15.2929825 C29.5848467,15.8503464 29.9507505,16.0530771 30.4163286,15.7361181 L35.214723,12.4694402 C35.6739377,12.1568134 35.6803011,11.6542773 35.214723,11.3373184 L30.4163286,8.07064053 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(32.584847, 11.904456) scale(1, -1) rotate(-14.000000) translate(-32.584847, -11.904456) "></path>
                            <text id="Label" className='anchorLeft' transform="translate(72.610007, 20.400950) rotate(6.000000) translate(-72.610007, -20.400950) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="51.1100066" y="25.9009496">{labels[7]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-6" {...this.getArrowProps(6)} transform="translate(214.987882, 134.797290) rotate(-366.000000) translate(-214.987882, -134.797290) translate(163.487882, 108.297290)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="0.25 -2.84217094e-14 102.602622 10.757694 99.942454 50.8754425 2.29938179 52.6670581"></polygon>
                            <path d="M0.157919863,20.1558618 C0.157919863,25.071196 10.9392016,29 24.125,29 C37.3107984,29 47.3912025,25.1396529 47.3912025,20.2243186" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M47.395362,19.980375 C47.395362,14.7543507 37.3107984,10.6374459 24.125,10.6374459 C10.9392016,10.6374459 0.124742909,14.8706252 0.124742909,20.0966495" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M5.86864451,23.4399389 C5.40942975,23.1273121 5.03716263,23.3222472 5.03716263,23.8830745 L5.03716263,30.6622809 C5.03716263,31.2196447 5.40306636,31.4223754 5.86864451,31.1054165 L10.6670389,27.8387386 C11.1262537,27.5261118 11.132617,27.0235757 10.6670389,26.7066168 L5.86864451,23.4399389 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(8.037163, 27.273754) scale(-1, 1) rotate(-18.000000) translate(-8.037163, -27.273754) "></path>
                            <path d="M32.4053724,8.27969746 C31.9461576,7.96707065 31.5738905,8.16200578 31.5738905,8.72283307 L31.5738905,15.5020395 C31.5738905,16.0594033 31.9397942,16.262134 32.4053724,15.9451751 L37.2037668,12.6784972 C37.6629815,12.3658704 37.6693449,11.8633343 37.2037668,11.5463754 L32.4053724,8.27969746 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(34.573891, 12.113512) scale(1, -1) rotate(-14.000000) translate(-34.573891, -12.113512) "></path>
                            <text id="Label" className='anchorLeft' transform="translate(74.538202, 22.588887) rotate(6.000000) translate(-74.538202, -22.588887) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="53.0382019" y="28.0888871">{labels[6]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-2" {...this.getArrowProps(2)} transform="translate(173.500000, 86.500000) rotate(-360.000000) translate(-173.500000, -86.500000) translate(94.000000, 67.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0.75" y="1.42108547e-14" width="158.25" height="39"></rect>
                            <path d="M0.75,22.1 C0.75,29.2797017 25.4862676,35.1 56,35.1 L56,35.1 C86.5137324,35.1 111.25,29.2797017 111.25,22.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M111.25,22.1 C111.25,14.9202983 86.5137324,9.1 56,9.1 C25.4862676,9.1 0.75,14.9202983 0.75,22.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M9.71984673,26.2791696 C9.26063197,25.9665428 8.88836486,26.1614779 8.88836486,26.7223052 L8.88836486,33.5015116 C8.88836486,34.0588754 9.25426859,34.2616061 9.71984673,33.9446472 L14.5182411,30.6779693 C14.9774559,30.3653425 14.9838193,29.8628064 14.5182411,29.5458475 L9.71984673,26.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(11.888365, 30.112985) scale(-1, 1) rotate(-18.000000) translate(-11.888365, -30.112985) "></path>
                            <path d="M93.7198467,9.27916958 C93.260632,8.96654278 92.8883649,9.16147791 92.8883649,9.72230519 L92.8883649,16.5015116 C92.8883649,17.0588754 93.2542686,17.2616061 93.7198467,16.9446472 L98.5182411,13.6779693 C98.9774559,13.3653425 98.9838193,12.8628064 98.5182411,12.5458475 L93.7198467,9.27916958 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(95.888365, 13.112985) scale(1, -1) rotate(-14.000000) translate(-95.888365, -13.112985) "></path>
                            <text id="Label" className='anchorLeft' font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="116" y="26">{labels[2]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-3" {...this.getArrowProps(3)} transform="translate(118.000000, 45.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="15 89 15 18 51 18 51 89"></polygon>
                            <path d="M-0.142120801,34.2401005 L64.1421208,34.2401005" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(32.000000, 34.240101) rotate(-270.000000) translate(-32.000000, -34.240101) "></path>
                            <path d="M29.833331,61.2026726 C29.3741163,60.8907879 29.0018492,61.0852603 29.0018492,61.6447564 L29.0018492,68.4078718 C29.0018492,68.9639127 29.3677529,69.1661622 29.833331,68.8499556 L34.6317254,65.5910314 C35.0909402,65.2791467 35.0973036,64.7778034 34.6317254,64.4615968 L29.833331,61.2026726 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(32.000121, 65.026207) rotate(-270.000000) translate(-32.000121, -65.026207) "></path>
                            <path d="M29.8437398,-0.360316293 C29.384525,-0.672943099 29.0122579,-0.478007972 29.0122579,0.082819317 L29.0122579,6.86202571 C29.0122579,7.41938956 29.3781616,7.62212023 29.8437398,7.30516132 L34.6421342,4.03848342 C35.1013489,3.72585661 35.1077123,3.22332052 34.6421342,2.90636161 L29.8437398,-0.360316293 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(32.000597, 3.473019) scale(-1, -1) rotate(-270.000000) translate(-32.000597, -3.473019) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="0" y="21" width="63" height="24"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="32" y="38">{labels[3]}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchPants;
