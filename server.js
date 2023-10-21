var express = require("express");
let random = require("./random")

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var Grass = require('./grass')
var GrassEater = require('./grassEater')
var Magican = require('./magican')
var MagicanEater = require('./magicanEater')
var Predator = require('./predator')

matrix = [];
side = 10;
n = 50;
m = 50;
grassArr = []
grassEaterArr = []
predatorArr = []
magicanArr = []
magicanEaterArr = []


function createMatrix() {
    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
        }
    }

    function characters(index, count) {
        for (let a = 0; a < count; a++) {
            var v = Math.floor(random(n))
            var w = Math.floor(random(m))
            matrix[v][w] = index;
        }
    }
    characters(1, 15)
    characters(2, 3)
    characters(3, 5)
    characters(4, 3)
    characters(5, 10)
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

createMatrix()

function playGame() {
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
    io.emit('MATRIX', matrix)
}

setInterval(function () {
    playGame()
}, 1000)