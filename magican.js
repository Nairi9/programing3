var Cnox = require('./cnox')
let random = require("./random");
module.exports = class Magican extends Cnox {
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
    move() {
        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 4
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

    }


}