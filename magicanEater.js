class MagicanEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;

        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

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