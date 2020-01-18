class Man {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.multiply = 0;
        this.directions = [];
    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getDirections(t) {
        this.newDirections();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        let fundMove = this.getDirections(5);
        let move = random(fundMove);

        if (move) {
            let x = move[0];
            let y = move[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 5;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        let fundCords1 = this.getDirections(1);
        let fundCords2 = this.getDirections(2);
        let fundCords3 = this.getDirections(3);
        let fundCords = fundCords1.concat(fundCords3, fundCords2);
        let cord = random(fundCords);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            let c = matrix[y][x];
            if (c == 1) {
                for (let i in xotArr) {
                    if (x == xotArr[i].x && y == xotArr[i].y) {
                        xotArr.splice(i, 1);
                    }
                }
            }
            else if (c == 2) {
                for (let i in eatArr) {
                    if (x == eatArr[i].x && y == eatArr[i].y) {
                        eatArr.splice(i, 1);
                    }
                }
            }
            else if (c == 3) {
                for (let i in gazanArr) {
                    if (x == gazanArr[i].x && y == gazanArr[i].y) {
                        gazanArr.splice(i, 1);
                    }
                }
            }
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 5;
            let norCity = new City(this.x, this.y);
            cityArr.push(norCity);
            this.x = x;
            this.y = y;
        }
        else { this.move(); }


    }
}