socket = io();
var side = 20, m = 40, n = 40;
var matrix = []

let colors = {
    grey: "grey",
    green: "white",
    yellow: "yellow",
    red: "red",
    purple: "purple",
    blue: "blue",
    black: "black",
    deepskyblue: "deepskyblue"
}
let my_btn = document.getElementById("btn")
let my_kaycak = document.getElementById("kaycak")

my_btn.addEventListener("click", changeColor)
my_kaycak.addEventListener("click", kaycak);


function kaycak() {
    socket.emit("Kaycak")
}

function changeColor() {
    if (colors.green === "green") {
        colors = {
            grey: "grey",
            green: "white",
            yellow: "yellow",
            red: "red",
            purple: "purple",
            blue: "blue",
            black: "black",
            deepskyblue: "deepskyblue"
        }
    }
    else if (colors.green === "white") {
        colors = {
            grey: "grey",
            green: "green",
            yellow: "yellow",
            red: "red",
            purple: "purple",
            blue: "blue",
            black: "black",
            deepskyblue: "deepskyblue"
        }
    }
    else {
        colors = {
            grey: "grey",
            green: "green",
            yellow: "yellow",
            red: "red",
            purple: "purple",
            blue: "blue",
            black: "black",
            deepskyblue: "deepskyblue"

        }
    }
}





function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');

}

function draw(m) {
    matrix = m
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill(colors.grey);
            }
            if (matrix[y][x] == 1) {
                fill(colors.green);
            }

            if (matrix[y][x] == 2) {
                fill(colors.yellow);
            }
            if (matrix[y][x] == 3) {
                fill(colors.red);
            }
            if (matrix[y][x] == 4) {
                fill(colors.purple);

            }
            if (matrix[y][x] == 5) {
                fill(colors.blue);
            }
            if (matrix[y][x] == 6) {
                fill(colors.black);
            }
            if (matrix[y][x] == 7) {
                fill(colors.deepskyblue);
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on('MATRIX', (m) => {
    matrix = m
})

socket.on('MATRIX', (m) => {
    draw(m)
})
socket.on('STATS', (stats) => {

    const statsElement = document.getElementById('stats');


    statsElement.innerHTML = `Grasses Count: ${stats.grassCount}`;

});
socket.on('GRASS_EATER_STATS', (stats) => {

    const grassEaterStatsElement = document.getElementById('grassEaterStats');
    grassEaterStatsElement.innerHTML = `GrassEaters Count: ${stats.grassEaterCount}`;

});

socket.on('PREDATOR_STATS', (stats) => {

    const predatorStatsElement = document.getElementById('predatorStats');
    predatorStatsElement.innerHTML = `Predators Count: ${stats.predatorCount}`;

});




