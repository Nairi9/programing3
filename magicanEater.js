var Cnox = require('./cnox')
let random = require("./random");
module.exports = class MagicanEater extends Cnox{
    constructor(x, y, index) {
        super(x, y, index)
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }

    eat() {
        let foods = this.chooseCell(4)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 1
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
            for (var i in magicanArr) {
                if (newX == magicanArr[i].x && newY == magicanArr[i].y) {
                    magicanArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    move() {

        let emptyCells = this.chooseCell(4)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 1
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}