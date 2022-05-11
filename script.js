/**
 * -1: empty
 * 0: river
 * 1: red
 * 2: yellow
 * 3: brown
 * 4: black
 * 5: blue
 * 6: green
 * 7: grey
 */
const color = [
    [255, 255, 255],
    [255, 0, 0],
    [247, 194, 0],
    [128, 58, 10],
    [0, 0, 0],
    [0, 0, 255],
    [0, 180, 0],
    [160, 160, 160],
];
const map = {
    bg1: {
        type: 1,
        canal: [
            [3, 3, 3, 5]
        ],
        map: [
            [3, 7, 6, 5, 2, 1, 3, 4, 1, 6, 5, 1, 4],
            [2, 0, 0, 3, 4, 0, 0, 2, 4, 0, 0, 2],
            [0, 0, 4, 0, 7, 0, 6, 0, 6, 0, 7, 0, 0],
            [6, 5, 2, 0, 0, 1, 5, 0, 1, 0, 1, 3],
            [4, 3, 1, 5, 4, 3, 7, 2, 0, 0, 6, 4, 5],
            [7, 6, 0, 0, 2, 6, 0, 0, 0, 3, 7, 3],
            [0, 0, 0, 7, 0, 1, 0, 6, 0, 2, 4, 5, 2],
            [2, 5, 3, 0, 0, 0, 5, 4, 0, 7, 3, 7],
            [1, 4, 7, 5, 1, 6, 2, 3, 7, 0, 5, 6, 1]
        ]
    },
    bg2: {
        type: 1,
        canal: [
            [3, 3, 3, 5]
        ],
        map: [
            [3, 7, 6, 5, 3, 1, 3, 4, 1, 5, 6, 1, 4],
            [2, 0, 0, 2, 4, 0, 0, 2, 6, 0, 0, 2],
            [0, 0, 4, 0, 7, 0, 6, 0, 4, 0, 1, 0, 0],
            [6, 5, 2, 0, 0, 1, 5, 0, 1, 0, 7, 3],
            [4, 3, 1, 5, 2, 3, 6, 2, 0, 0, 6, 4, 1],
            [7, 6, 0, 0, 4, 7, 0, 0, 0, 3, 7, 2],
            [0, 0, 0, 7, 0, 1, 0, 6, 0, 2, 4, 5, 3],
            [2, 5, 3, 0, 0, 0, 5, 4, 0, 7, 3, 1],
            [5, 4, 7, 5, 1, 6, 2, 3, 7, 0, 5, 6, 7]
        ]
    },
    fi: {
        type: 0,
        canal: [
            [6, 1, 4, 2]
        ],
        map: [
            [3, 0, 3, 4, 2, 0, 7, 6, 1, 5, 2, 5],
            [1, 2, 0, 5, 7, 1, 0, 0, 0, 2, 3, 4, 7],
            [6, 4, 0, 0, 0, 3, 6, 2, 0, 0, 0, 0],
            [2, 7, 6, 2, 4, 0, 5, 1, 3, 0, 6, 5, 6],
            [0, 0, 3, 0, 0, 1, 4, 6, 7, 0, 3, 4],
            [6, 1, 0, 0, 6, 0, 0, 0, 3, 5, 0, 7, 1],
            [7, 0, 2, 7, 5, 1, 6, 0, 1, 7, 0, 4],
            [4, 5, 0, 4, 3, 7, 5, 0, 2, 4, 0, 1, 5],
            [7, 6, 0, 1, 2, 4, 2, 0, 5, 3, 0, 3],
        ]
    },
    ms1: {
        type: 1,
        canal: [
            [4, 3, 3, 4]
        ],
        map: [
            [6,4,0,3,2,7,4,7,2,1,4,5,2],
            [5,3,0,5,6,1,0,0,0,0,0,3],
            [7,6,1,0,0,3,0,4,7,3,2,0,7],
            [0,0,0,7,0,0,6,1,5,6,1,0],
            [1,7,2,0,5,1,0,3,2,7,3,0,4],
            [4,3,0,6,2,6,0,7,5,6,0,7],
            [2,5,0,4,7,4,5,0,3,4,0,6,1],
            [6,0,3,1,3,2,1,0,0,0,1,5],
            [4,0,0,6,5,7,5,0,6,2,4,3,2],
        ]
    },
    ms2: {
        type: 0,
        canal: [
            [8, 0, 7, 1],
            [2, 4, 2, 6],
            [5, 4, 4, 5],
            [10, 3, 8, 4],
            [8, 5, 9, 6],
            [9, 6, 8, 7],
            [3, 7, 4, 8],
        ],
        map: [
            [7, 5, 1, 3, 2, 5, 2, 1, 0, 0, 6, 5],
            [2, 4, 6, 0, 0, 4, 3, 0, 6, 7, 0, 3, 4],
            [3, 0, 0, 6, 1, 7, 0, 4, 5, 1, 0, 2],
            [5, 1, 7, 0, 2, 3, 6, 0, 0, 2, 0, 4, 1],
            [6, 2, 0, 4, 5, 0, 0, 1, 0, 7, 6, 3],
            [7, 0, 3, 7, 0, 2, 0, 7, 0, 3, 4, 5, 1],
            [1, 0, 0, 0, 1, 6, 3, 4, 2, 0, 0, 7],
            [2, 5, 4, 0, 5, 7, 5, 0, 0, 7, 6, 0, 5],
            [4, 3, 0, 6, 0, 0, 0, 6, 1, 3, 2, 4],
        ]
    },
}

const raceValueMap = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 1, 2, 3, 3, 2, 1],
    [4, 1, 0, 1, 2, 3, 3, 2],
    [4, 2, 1, 0, 1, 2, 3, 3],
    [4, 3, 2, 1, 0, 1, 2, 3],
    [4, 3, 3, 2, 1, 0, 1, 2],
    [4, 2, 3, 3, 2, 1, 0, 1],
    [4, 1, 2, 3, 3, 2, 1, 0]
]

const PADDING = 8;
const EDGE = 32;
const SIN60 = Math.sin(Math.PI / 3);
const SIN60EDGE = EDGE * SIN60;
const CANVAS_WIDTH = PADDING * 2 + SIN60EDGE * 26;
const CANVAS_HEIGHT = PADDING * 2 + EDGE * 14;

let race, showCanal;

function calculateDiff(val, diff) {
    return Math.floor(val + (255 - val) * diff / 4);
}

function getColor(rgbArray, diff) {
    return `rgb(${calculateDiff(rgbArray[0], diff)},${calculateDiff(rgbArray[1], diff)},${calculateDiff(rgbArray[2], diff)})`;
}

function getXY(i, j, type) { // type 0 = short, 1 = long
    return {
        x: (i * 2 + 1 + (j & 1 ^ 1 ^ type)) * SIN60EDGE + PADDING,
        y: (j * 1.5 + 1) * EDGE + PADDING,
    };

}

function drawHex(ctx, i, j, type, value) {
    const { x: ox, y: oy } = getXY(i, j, type);
    const diff = raceValueMap[race][value];
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineWidth = 1;
    ctx.fillStyle = getColor(color[race || value], diff);
    ctx.beginPath();
    ctx.moveTo(ox, oy - EDGE);
    ctx.lineTo(ox + SIN60EDGE, oy - EDGE / 2);
    ctx.lineTo(ox + SIN60EDGE, oy + EDGE / 2);
    ctx.lineTo(ox, oy + EDGE);
    ctx.lineTo(ox - SIN60EDGE, oy + EDGE / 2);
    ctx.lineTo(ox - SIN60EDGE, oy - EDGE / 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawHome(ctx, i, j, type, value) {
    const { x: ox, y: oy } = getXY(i, j, type);
    const diff = raceValueMap[race][value];
    if (!race || diff)
        return;
    ctx.fillStyle = 'rgb(255, 255, 255)';
    // ctx.strokeStyle = 'rgb(255, 255, 255)';
    // ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox, oy - EDGE / 3);
    ctx.lineTo(ox + SIN60EDGE / 2, oy);
    ctx.lineTo(ox + SIN60EDGE / 2, oy + EDGE / 3);
    ctx.lineTo(ox - SIN60EDGE / 2, oy + EDGE / 3);
    ctx.lineTo(ox - SIN60EDGE / 2, oy);
    ctx.closePath();
    // ctx.stroke();
    ctx.fill();
}

function drawCanal(ctx, type, canal) {
    const { x: px, y: py } = getXY(canal[0], canal[1], type);
    const { x: qx, y: qy } = getXY(canal[2], canal[3], type);

    ctx.strokeStyle = 'rgb(184, 0, 255)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo((5 * px + 2 * qx) / 7, (5 * py + 2 * qy) / 7);
    ctx.lineTo((2 * px + 5 * qx) / 7, (2 * py + 5 * qy) / 7);
    ctx.closePath();
    ctx.stroke();
}

function drawMap(name) {
    const canvas = $(`#${name}`)[0];
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const ctx = canvas.getContext('2d');
    const m = map[name];
    for (let j = 0; j < m.map.length; j++)
        for (let i = 0; i < m.map[j].length; i++)
            drawHex(ctx, i, j, m.type, m.map[j][i]);
    for (let j = 0; j < m.map.length; j++)
        for (let i = 0; i < m.map[j].length; i++)
            drawHome(ctx, i, j, m.type, m.map[j][i]);
    if (!!showCanal && !!m.canal)
        for (const canal of m.canal)
            drawCanal(ctx, m.type, canal);
}

function drawAllMap() {
    drawMap('bg1');
    drawMap('bg2');
    drawMap('fi');
    drawMap('ms1');
    drawMap('ms2');
}

function onShowCanal(element) {
    showCanal = element.checked;
    drawAllMap();
}

function onSelectRace(element) {
    race = parseInt(element.value);
    drawAllMap();
}

window.addEventListener('load', function () {
    race = parseInt($('#race').val());
    showCanal = $('#canal')[0].checked;
    drawAllMap();
});