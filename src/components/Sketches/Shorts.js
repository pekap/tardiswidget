import React, { Component } from 'react';

const MAX_NUMBER_OF_MEASUREMENTS = 7;

// Measurements:
// 1 - Обхват талии
// 2 - Обхват бедер
// 3 - Высота
// 4 - Внешняя длина
// 5 - Длина внутри
// 6 - Обхват бедра

const EMPTY_HOVER_TEXT = ' ';

class SketchShorts extends Component {
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
                    <g id="Shorts">
                        <g id="MainShape" onMouseEnter={this.handleMouseEnter(0)} transform="translate(34.000000, 44.000000)">
                            <path d="M29,20 L204,20 L205.66175,64.0363663 C205.886717,69.9979874 206.691031,75.9235918 208.063331,81.7294791 L232,183 L144,204 L117.457698,115.669286 L117.457698,115.669286 C117.298763,115.140364 116.741145,114.84043 116.212224,114.999365 C115.890591,115.096011 115.638949,115.347653 115.542302,115.669286 L89,204 L1,183 L24.9366686,81.7294791 C26.3089692,75.9235918 27.1132835,69.9979874 27.3382503,64.0363663 L29,20 Z" id="MainShape" stroke="#93969E" stroke-width="2" fill="#F4F4F5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <g id="Decorations" transform="translate(0.515458, 175.475884)" fill="#93969E" opacity="0.5">
                                <polygon id="Decoration-1" transform="translate(45.455837, 14.639451) rotate(13.000000) translate(-45.455837, -14.639451) " points="0.443135627 10.5586894 90.9116735 11.224768 89.5632207 18.7202116 0 17"></polygon>
                                <polygon id="Decoration-1-Copy" transform="translate(186.455837, 14.639451) scale(-1, 1) rotate(13.000000) translate(-186.455837, -14.639451) " points="141.443136 10.5586894 231.911673 11.224768 230.563221 18.7202116 141 17"></polygon>
                            </g>
                        </g>
                        <g id="Arrow-4" {...this.getArrowProps(4)} transform="translate(5.000000, 48.000000)">
                            <path d="M0,177 L24,0 L55,7 C55.1416312,36.8406701 53.8082978,61.1740034 51,80 C48.1917022,98.8259966 40.5250355,134.825997 28,188 L0,177 Z" id="HoverArea" fill-opacity="0.1" fill="#FF0000"></path>
                            <path d="M-40.8965727,84.1034273 C-40.8965727,84.1034273 -14.0214946,82.9468297 7.10342727,86.1034273 C28.2283491,89.2600248 116.103427,111.103427 116.103427,111.103427" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(37.603427, 97.500000) rotate(-270.000000) translate(-37.603427, -97.500000) "></path>
                            <path d="M22.2529966,170.763561 C21.7937819,170.451677 21.4215147,170.646149 21.4215147,171.205645 L21.4215147,177.968761 C21.4215147,178.524802 21.7874185,178.727051 22.2529966,178.410844 L27.051391,175.15192 C27.5106058,174.840035 27.5169691,174.338692 27.051391,174.022486 L22.2529966,170.763561 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(24.419786, 174.587096) rotate(-256.000000) translate(-24.419786, -174.587096) "></path>
                            <path d="M48.8191988,14.8986558 C48.359984,14.586029 47.9877169,14.7809641 47.9877169,15.3417914 L47.9877169,22.1209978 C47.9877169,22.6783617 48.3536207,22.8810923 48.8191988,22.5641334 L53.6175932,19.2974555 C54.076808,18.9848287 54.0831713,18.4822926 53.6175932,18.1653337 L48.8191988,14.8986558 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(50.976056, 18.731991) scale(-1, -1) rotate(-270.000000) translate(-50.976056, -18.731991) "></path>
                            <text id="Label" transform="translate(30.419130, 93.159616) rotate(-76.000000) translate(-30.419130, -93.159616) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="8.91913016" y="98.6596161">{labels[4]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-5" {...this.getArrowProps(5)} transform="translate(95.000000, 90.000000)">
                            <path d="M0,154 L28,57 C52.8082978,43.5073367 63.8082978,46.1740034 61,65 C58.1917022,83.8259966 48.5250355,116.825997 32,164 L0,154 Z" id="HoverArea" fill-opacity="0.1" fill="#FF0000"></path>
                            <path d="M-4.5,98.5 L79.5,123.5" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(37.500000, 111.000000) rotate(-270.000000) translate(-37.500000, -111.000000) "></path>
                            <path d="M22.4729233,149.10785 C22.0137086,148.795965 21.6414415,148.990438 21.6414415,149.549934 L21.6414415,156.313049 C21.6414415,156.86909 22.0073452,157.071339 22.4729233,156.755133 L27.2713177,153.496209 C27.7305325,153.184324 27.7368959,152.682981 27.2713177,152.366774 L22.4729233,149.10785 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(24.639713, 152.931384) rotate(-254.000000) translate(-24.639713, -152.931384) "></path>
                            <path d="M47.4729233,66.1078498 C47.0137086,65.7959651 46.6414415,65.9904375 46.6414415,66.5499336 L46.6414415,73.313049 C46.6414415,73.8690899 47.0073452,74.0713394 47.4729233,73.7551328 L52.2713177,70.4962086 C52.7305325,70.1843239 52.7368959,69.6829806 52.2713177,69.366774 L47.4729233,66.1078498 Z" id="ArrowHead-2-Copy" fill="#008AF3" transform="translate(49.639713, 69.931384) scale(-1, -1) rotate(-254.000000) translate(-49.639713, -69.931384) "></path>
                            <path d="M58.8191988,-0.10134418 C58.359984,-0.413970987 57.9877169,-0.219035859 57.9877169,0.34179143 L57.9877169,7.12099782 C57.9877169,7.67836167 58.3536207,7.88109234 58.8191988,7.56413343 L63.6175932,4.29745553 C64.076808,3.98482873 64.0831713,3.48229263 63.6175932,3.16533372 L58.8191988,-0.10134418 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(60.976056, 3.731991) scale(-1, -1) rotate(-270.000000) translate(-60.976056, -3.731991) "></path>
                            <text id="Label" transform="translate(33.419130, 85.159616) rotate(-72.000000) translate(-33.419130, -85.159616) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="11.9191302" y="90.6596161">{labels[5]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-1" {...this.getArrowProps(1)} transform="translate(150.000000, 60.000000) rotate(-360.000000) translate(-150.000000, -60.000000) translate(62.000000, 30.000000)">
                            <rect id="HoverArea" fill-opacity="0.1" fill="#FF0000" x="0" y="18" width="176" height="42"></rect>
                            <path d="M1,36.1 C1,44.936556 40.1750844,52.1 88.5,52.1 C136.824916,52.1 176,44.936556 176,36.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M176,36 C176,27.163444 136.824916,20 88.5,20 C40.1750844,20 1,27.163444 1,36" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M19.7198467,42.2791696 C19.260632,41.9665428 18.8883649,42.1614779 18.8883649,42.7223052 L18.8883649,49.5015116 C18.8883649,50.0588754 19.2542686,50.2616061 19.7198467,49.9446472 L24.5182411,46.6779693 C24.9774559,46.3653425 24.9838193,45.8628064 24.5182411,45.5458475 L19.7198467,42.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(21.888365, 46.112985) scale(-1, 1) rotate(-18.000000) translate(-21.888365, -46.112985) "></path>
                            <path d="M140.719847,20.2791696 C140.260632,19.9665428 139.888365,20.1614779 139.888365,20.7223052 L139.888365,27.5015116 C139.888365,28.0588754 140.254269,28.2616061 140.719847,27.9446472 L145.518241,24.6779693 C145.977456,24.3653425 145.983819,23.8628064 145.518241,23.5458475 L140.719847,20.2791696 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(142.888365, 24.112985) scale(1, -1) rotate(-14.000000) translate(-142.888365, -24.112985) "></path>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="88" y="15">{labels[1]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-2" {...this.getArrowProps(2)} transform="translate(153.000000, 128.500000) rotate(-360.000000) translate(-153.000000, -128.500000) translate(59.000000, 98.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="3 2.84217094e-14 179 2.84217094e-14 188 49 119 61 78 42 -1.42108547e-14 33"></polygon>
                            <path d="M4,18.1 C4,26.936556 43.1750844,34.1 91.5,34.1 C139.824916,34.1 179,26.936556 179,18.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M179,18 C179,9.163444 139.824916,2 91.5,2 C43.1750844,2 4,9.163444 4,18" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M22.7198467,24.2791696 C22.260632,23.9665428 21.8883649,24.1614779 21.8883649,24.7223052 L21.8883649,31.5015116 C21.8883649,32.0588754 22.2542686,32.2616061 22.7198467,31.9446472 L27.5182411,28.6779693 C27.9774559,28.3653425 27.9838193,27.8628064 27.5182411,27.5458475 L22.7198467,24.2791696 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(24.888365, 28.112985) scale(-1, 1) rotate(-18.000000) translate(-24.888365, -28.112985) "></path>
                            <path d="M143.719847,2.27916958 C143.260632,1.96654278 142.888365,2.16147791 142.888365,2.72230519 L142.888365,9.50151159 C142.888365,10.0588754 143.254269,10.2616061 143.719847,9.9446472 L148.518241,6.6779693 C148.977456,6.36534249 148.983819,5.86280639 148.518241,5.54584748 L143.719847,2.27916958 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(145.888365, 6.112985) scale(1, -1) rotate(-14.000000) translate(-145.888365, -6.112985) "></path>
                            <text id="Label" transform="translate(160.701226, 41.719916) rotate(-10.000000) translate(-160.701226, -41.719916) " font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="139.201226" y="47.2199164">{labels[2]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-6" {...this.getArrowProps(6)} transform="translate(216.335328, 214.546325) rotate(-374.000000) translate(-216.335328, -214.546325) translate(170.335328, 190.546325)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="-3.26849658e-13 2.19253187e-13 92 0 92 48 -1.77947934e-13 48"></polygon>
                            <path d="M-3.41060513e-13,18.1 C-3.41060513e-13,26.936556 20.5949015,34.1 46,34.1 C71.4050985,34.1 92,26.936556 92,18.1" id="Path--Front" stroke="#9ED0FB" stroke-width="2"></path>
                            <path d="M92,18 C92,9.163444 71.4050985,2 46,2 C20.5949015,2 -3.55271368e-13,9.163444 -3.55271368e-13,18" id="Path--Back" stroke="#9ED0FB" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,15"></path>
                            <path d="M10.4779248,25.2494653 C10.0187101,24.9368385 9.64644296,25.1317736 9.64644296,25.6926009 L9.64644296,32.4718073 C9.64644296,33.0291712 10.0123467,33.2319018 10.4779248,32.9149429 L15.2763192,29.648265 C15.735534,29.3356382 15.7418974,28.8331021 15.2763192,28.5161432 L10.4779248,25.2494653 Z" id="ArrowHead--Front" fill="#008AF3" transform="translate(12.646443, 29.083280) scale(-1, 1) rotate(-18.000000) translate(-12.646443, -29.083280) "></path>
                            <path d="M77.9406398,3.48095463 C77.481425,3.16832782 77.1091579,3.36326295 77.1091579,3.92409024 L77.1091579,10.7032966 C77.1091579,11.2606605 77.4750616,11.4633912 77.9406398,11.1464322 L82.7390342,7.87975434 C83.1982489,7.56712754 83.2046123,7.06459144 82.7390342,6.74763253 L77.9406398,3.48095463 Z" id="ArrowHead--Back" fill="#008AF3" transform="translate(80.109158, 7.314770) scale(1, -1) rotate(-14.000000) translate(-80.109158, -7.314770) "></path>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="45.0979519" y="23.047474">{labels[6]}</tspan>
                            </text>
                        </g>
                        <g id="Arrow-3" {...this.getArrowProps(3)} transform="translate(118.000000, 64.000000)">
                            <polygon id="HoverArea" fill-opacity="0.1" fill="#FF0000" points="14 95 14 0 50 4.52581587e-15 50 95"></polygon>
                            <path d="M-12.0979797,49.0979797 L75.2842416,49.0979797" id="Path" stroke="#9ED0FB" stroke-width="2" transform="translate(31.500000, 49.597980) rotate(-270.000000) translate(-31.500000, -49.597980) "></path>
                            <path d="M29.833331,88.2026726 C29.3741163,87.8907879 29.0018492,88.0852603 29.0018492,88.6447564 L29.0018492,95.4078718 C29.0018492,95.9639127 29.3677529,96.1661622 29.833331,95.8499556 L34.6317254,92.5910314 C35.0909402,92.2791467 35.0973036,91.7778034 34.6317254,91.4615968 L29.833331,88.2026726 Z" id="ArrowHead-2" fill="#008AF3" transform="translate(32.000121, 92.026207) rotate(-270.000000) translate(-32.000121, -92.026207) "></path>
                            <path d="M29.8437398,-0.360316293 C29.384525,-0.672943099 29.0122579,-0.478007972 29.0122579,0.082819317 L29.0122579,6.86202571 C29.0122579,7.41938956 29.3781616,7.62212023 29.8437398,7.30516132 L34.6421342,4.03848342 C35.1013489,3.72585661 35.1077123,3.22332052 34.6421342,2.90636161 L29.8437398,-0.360316293 Z" id="ArrowHead--1" fill="#008AF3" transform="translate(32.000597, 3.473019) scale(-1, -1) rotate(-270.000000) translate(-32.000597, -3.473019) "></path>
                            <rect id="LabelBackground" fill="#F4F4F5" x="0" y="24" width="63" height="24"></rect>
                            <text id="Label" font-family="RobotoMono-Bold, Roboto Mono" font-size="14" font-weight="bold" fill="#008AF3">
                                <tspan x="32" y="41">{labels[3]}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default SketchShorts;
