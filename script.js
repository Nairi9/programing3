var matrix = [];
var side = 10;
var n = 50;
var m = 50;

for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}
function characters(index, count) {
    for (let a = 0; a < count; a++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index;
    }
}
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let magicanArr = []
let magicanEaterArr = []

function setup() {
    characters(1, 15)
    characters(2, 3)
    characters(3, 5)
    characters(4, 3)
    characters(5, 10)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y, 3)
                predatorArr.push(predator)
            }
            else if (matrix[y][x] == 4) {
                let magican = new Magican(x, y, 4)
                magicanArr.push(magican)
            }
            else if (matrix[y][x] == 5) {
                let magicanEater = new MagicanEater(x, y, 5)
                magicanEaterArr.push(magicanEater)
            }
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in magicanArr) {
        magicanArr[i].move()
    }
    for (let i in magicanEaterArr) {
        magicanEaterArr[i].move()
    }
}


