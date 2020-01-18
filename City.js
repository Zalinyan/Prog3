class City {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.time = 0;
    }

    die() {
        this.time++;
        if (this.time == 10) {
            matrix[this.y][this.x] = 0;
            for (let i in cityArr) {
                if (this.x == cityArr[i].x && this.y == cityArr[i].y) {
                    cityArr.splice(i, 1);
                }
            }
        }
        else this.mul();
    }
    newDirections() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
            [this.x + 1, this.y]
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
    mul() {
        if (this.time == 9) {
            let fundCords = this.getDirections(1);
            let cord = random(fundCords);
            if (cord) {
                let x = cord[0];
                let y = cord[1];
                let norCity = new City(x, y);
                cityArr.push(norCity);
                matrix[y][x] = 5;
            }
        }
    }
}