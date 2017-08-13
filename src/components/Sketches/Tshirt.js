import React, { Component } from 'react';

const MAX_NUMBER_OF_MEASUREMENTS = 4;

// Measurements:
// 1 - Обхват груди
// 2 - Длина
// 3 - Рукав от горла
// 4 - Рукав от плеча

const EMPTY_HOVER_TEXT = 'Наведите на мерку';

class SketchTshirt extends Component {
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
            <svg onMouseLeave={this.handleMouseEnter(0)} width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Sketches" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="TShirt">
                        <g id="MainShape" onMouseEnter={this.handleMouseEnter(0)} transform="translate(30.000000, 42.000000)">
                            <path d="M194.2821,16.5779232 L154.920419,1 L154.011044,1 C145.648568,10.3011442 133.517409,16.1563754 119.998584,16.1563754 C106.479759,16.1563754 94.3476405,10.3011442 85.9765242,1 L85.0671493,1 L45.699281,16.5769011 L45.699281,16.5769011 C43.2381022,17.5507292 40.9947013,19.0034004 39.0991255,20.8507052 L0,58.9541661 L44.8411516,94.6731802 L58.1535785,82.4676099 L58.1535785,216.990662 L120.00096,217 L181.848342,217 L181.848342,82.4769478 L195.142049,94.6825182 L240,58.9539414 L200.877041,20.8474671 L200.877041,20.8474671 C198.982622,19.002268 196.741069,17.5510935 194.2821,16.5779232 Z" stroke="#93969E" stroke-width="2" fill="#F4F4F5" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                            <g id="Decorations">
                                <polygon id="Decoration-1" fill="#93969E" opacity="0.5" points="191.586426 91.6064453 236.772949 55.9121094 239.906738 58.7348633 195.107422 94.9584961"></polygon>
                                <polygon id="Decoration-2" fill="#93969E" opacity="0.5" transform="translate(24.746582, 75.435303) scale(-1, 1) translate(-24.746582, -75.435303) " points="0.586425781 91.6064453 45.7729492 55.9121094 48.9067383 58.7348633 4.10742188 94.9584961"></polygon>
                                <rect id="Decoration-3" fill="#93969E" opacity="0.5" x="58" y="211" width="123" height="6"></rect>
                            </g>
                        </g>
                        <g id="Arrow-4" {...this.getArrowProps(4)} transform="translate(232.000000, 52.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FD0000" points="15 0 87 25 90 67 74 84 0 23"></polygon>
                            <path d="M-2.62120577,23.9751771 L50.8258482,23.9751771" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(24.102321, 23.975177) rotate(45.000000) translate(-24.102321, -23.975177) "></path>
                            <path d="M39.7695301,37.9770891 C39.3103153,37.6644623 38.9380482,37.8593974 38.9380482,38.4202247 L38.9380482,45.1994311 C38.9380482,45.7567949 39.3039519,45.9595256 39.7695301,45.6425667 L44.5679244,42.3758888 C45.0271392,42.063262 45.0335026,41.5607259 44.5679244,41.243767 L39.7695301,37.9770891 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(41.938048, 41.810904) rotate(45.000000) translate(-41.938048, -41.810904) "></path>
                            <path d="M3.39096933,1.59852835 C2.93175457,1.28590155 2.55948746,1.48083668 2.55948746,2.04166396 L2.55948746,8.82087036 C2.55948746,9.3782342 2.92539119,9.58096488 3.39096933,9.26400597 L8.18936372,5.99732807 C8.64857848,5.68470126 8.65494186,5.18216516 8.18936372,4.86520625 L3.39096933,1.59852835 Z" id="ArrowHead-1" fill="#008AF3" transform="translate(5.559487, 5.432343) scale(-1, 1) rotate(-45.000000) translate(-5.559487, -5.432343) "></path>
                            <text id="Label" transform="translate(47.920310, 27.920310) rotate(45.000000) translate(-47.920310, -27.920310) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="26.4203102" y="33.4203102">{labels[4]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-2" {...this.getArrowProps(2)} transform="translate(123.000000, 57.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="-1.42108547e-14 137 48 137 48 3 84 3 84 137 130 137 130 180 82 180 82 202 46 202 46 180 -1.42108547e-14 180"></polygon>
                            <path d="M-70.9510101,102.04899 L124.95101,102.04899" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(27.000000, 102.048990) rotate(-270.000000) translate(-27.000000, -102.048990) "></path>
                            <path d="M24.833331,194.202673 C24.3741163,193.890788 24.0018492,194.08526 24.0018492,194.644756 L24.0018492,201.407872 C24.0018492,201.963913 24.3677529,202.166162 24.833331,201.849956 L29.6317254,198.591031 C30.0909402,198.279147 30.0973036,197.777803 29.6317254,197.461597 L24.833331,194.202673 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(27.000121, 198.026207) rotate(-270.000000) translate(-27.000121, -198.026207) "></path>
                            <path d="M24.8437398,-0.360316293 C24.384525,-0.672943099 24.0122579,-0.478007972 24.0122579,0.082819317 L24.0122579,6.86202571 C24.0122579,7.41938956 24.3781616,7.62212023 24.8437398,7.30516132 L29.6421342,4.03848342 C30.1013489,3.72585661 30.1077123,3.22332052 29.6421342,2.90636161 L24.8437398,-0.360316293 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(27.000597, 3.473019) scale(-1, -1) rotate(-270.000000) translate(-27.000597, -3.473019) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="0" y="148" width="54" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="27" y="169">{labels[2]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-1" {...this.getArrowProps(1)} transform="translate(150.000000, 129.500000) rotate(-360.000000) translate(-150.000000, -129.500000) translate(89.000000, 109.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0" y="1.42108547e-14" width="130" height="50"></rect>
                            <path d="M0,13.1 C0,20.2797017 27.3106303,26.1 61,26.1 L61,26.1 C94.6893697,26.1 122,20.2797017 122,13.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M122,13.1 C122,5.92029825 94.6893697,0.1 61,0.1 C27.3106303,0.1 0,5.92029825 0,13.1" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M14.7198467,18.2791696 C14.260632,17.9665428 13.8883649,18.1614779 13.8883649,18.7223052 L13.8883649,25.5015116 C13.8883649,26.0588754 14.2542686,26.2616061 14.7198467,25.9446472 L19.5182411,22.6779693 C19.9774559,22.3653425 19.9838193,21.8628064 19.5182411,21.5458475 L14.7198467,18.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(16.888365, 22.112985) scale(-1, 1) rotate(-18.000000) translate(-16.888365, -22.112985) "></path>
                            <path d="M105.719847,1.27916958 C105.260632,0.966542778 104.888365,1.16147791 104.888365,1.72230519 L104.888365,8.50151159 C104.888365,9.05887543 105.254269,9.26160611 105.719847,8.9446472 L110.518241,5.6779693 C110.977456,5.36534249 110.983819,4.86280639 110.518241,4.54584748 L105.719847,1.27916958 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(107.888365, 5.112985) scale(1, -1) rotate(-14.000000) translate(-107.888365, -5.112985) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="32" y="11" width="59" height="30"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="61" y="32">{labels[1]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-3" {...this.getArrowProps(3)} transform="translate(20.000000, 30.000000)">
                            <path d="M0,44 C16.0578032,23.4964299 31.7244699,10.8297632 47,6 C62.2755301,1.17023681 89.9421968,-0.496429858 130,1 L130,35 C104.943402,36.2509764 86.9434023,39.2509764 76,44 C65.0565977,48.7490236 47.7232644,61.082357 24,81 L0,81 L0,44 Z" id="HoverArea" fill-opacity="0.1" fill="#FF0000"></path>
                            <path d="M5.77783203,63.9189453 L46.0287765,25.0905757 L46.0287765,25.0905757 C46.9644775,24.1879449 48.0672117,23.4764359 49.2752454,22.9958809 L90.2197084,6.70819888 L90.2197084,6.70819888 C91.3958726,6.24032152 92.6501726,6 93.9159811,6 L131,6" id="Path" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M3.48298779,59.8973406 C3.02377303,59.5847138 2.65150592,59.7796489 2.65150592,60.3404762 L2.65150592,67.1196826 C2.65150592,67.6770465 3.01740965,67.8797771 3.48298779,67.5628182 L8.28138218,64.2961403 C8.74059694,63.9835135 8.74696032,63.4809774 8.28138218,63.1640185 L3.48298779,59.8973406 Z" id="ArrowHead-1" fill="#008AF3" transform="translate(5.651506, 63.731156) scale(-1, 1) rotate(45.000000) translate(-5.651506, -63.731156) "></path>
                            <path d="M127.642771,2.32036453 C127.183556,2.00773773 126.811289,2.20267285 126.811289,2.76350014 L126.811289,9.54270654 C126.811289,10.1000704 127.177192,10.3028011 127.642771,9.98584215 L132.441165,6.71916425 C132.90038,6.40653744 132.906743,5.90400134 132.441165,5.58704243 L127.642771,2.32036453 Z" id="ArrowHead-2" fill="#008AF3"></path>
                            <text id="Label" transform="translate(32.100439, 22.631492) rotate(-44.000000) translate(-32.100439, -22.631492) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="10.6004388" y="28.1314917">{labels[3]}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchTshirt;
