var pieData = document.querySelectorAll('.pie');
var pieArray = {};
for (var it = 0; it < pieData.length; it++) {
    var col = pieData[it].getAttribute('data-color');
    var val = (pieData[it].getAttribute('data-value') / 100) * 360.0;
    var opa = (pieData[it].getAttribute('data-color-opacity')) * 1.0;
    pieArray[it] = { value: val, color: col, op: opa };
}

var svg = document.getElementById('pieSVG');

function createPie(svg, width, height, radius, pieArray) {
    var pathObj = {};
    var theta = 0;
    var currentPos = [(width / 2 + (radius * (Math.sin(theta)))),
        (height / 2 - (radius * (Math.cos(theta))))
    ];

    for (x in pieArray) {
        theta += (pieArray[x]['value'] / 360) * 2 * Math.PI;

        var nextPos = [(width / 2 + (radius * (Math.sin(theta)))),
            (height / 2 - (radius * (Math.cos(theta))))
        ];
        var bigCurve = pieArray[x]['value'] > 180 ? 1 : 0;
        var path = '<path d="M' + (+width / 2) + ' ' + (+height / 2) + ' ' + 'L ' + currentPos[0] + ' ' + currentPos[1] + ' ' + 'A ' + radius + ' ' + radius + ' 0 ' + bigCurve + ' 1 ' + nextPos[0] + ' ' + nextPos[1] + ' ' + 'L ' + (width / 2) + ' ' + (height / 2) + ' " fill="' + pieArray[x]['color'] + '" fill-opacity="' + pieArray[x]['op'] + '" />'
        svg.innerHTML += path;
        currentPos = nextPos;
    }
}
createPie(svg, 400, 300, 100, pieArray);
