class Gazan extends LivingCreature {
    constructor(x, y, multiply, directions, energy){
        super(x,y, multiply,)
        this.energy = 8;
    }
    
    move() {
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            let p = matrix[y][x];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = p;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        let fundCords = this.getDirections(2);
        let cord = random(fundCords);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (let i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            if (this.multiply == 5) {
                this.mul();
                this.multiply = 0;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }

    }
    mul() {
        let fundCords = this.getDirections(1);
        let cord = random(fundCords);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            let norGazan = new Gazan(x, y);
            gazanArr.push(norGazan);
            matrix[y][x] = 3;
        }


    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in gazanArr) {
            if (this.x == gazanArr[i].x && this.y == gazanArr[i].y) {
                gazanArr.splice(i, 1);
            }
        }
    }







}