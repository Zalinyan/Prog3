var side = 10;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
let gazanArr = []; //gazani zangavc
let manArr = []; //mard zangvac
let cityArr = []; //qaxaq zangvac


let matrix = [];
let rows = 100;
let columns = 100;

for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 10) {
            matrix[y][x] = 0; // Մատրիցի 10 տոկոսը կլինի 0
        }
        if (a >= 10 && a < 61) {
            matrix[y][x] = 1; // Մատրիցի 51 տոկոսը կլինի 1
        }
        else if (a >= 61 && a < 85) {
            matrix[y][x] = 2; // Մատրիցի 24 տոկոսը կլինի 2
        }
        else if (a >= 85 && a < 99) {
            matrix[y][x] = 3; // Մատրիցի 14 տոկոսը կլինի 3
        }
        else if (a >= 99 && a < 100) {
            matrix[y][x] = 4; // Մատրիցի 1 տոկոսը կլինի 4
        }
    }
}

function setup() {
    //noStroke();
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            }
            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
            if (matrix[y][x] == 3) {
                let gazan = new Gazan(x, y);
                gazanArr.push(gazan);
            }
            if (matrix[y][x] == 4) {
                let man = new Man(x, y);
                manArr.push(man);

            }
            if (matrix[y][x] == 5) {
                let city = new City(x, y);
                cityArr.push(city);
            }
        }
    }
}

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
            }
            if (matrix[i][j] == 2) {
                fill("orange");
            }
            if (matrix[i][j] == 0) {
                fill('#acacac');

            }
            if (matrix[i][j] == 3) {
                fill("red");
            }
            if (matrix[i][j] == 4) {
                fill("blue");
            }
            if (matrix[i][j] == 5) {
                fill("black");
            }

            rect(j * side, i * side, side, side);
        }
    }
    for (let i in xotArr) {
        xotArr[i].mul();
    }
    for (let i in eatArr) {
        eatArr[i].eat();
    }
    for (let i in gazanArr) {
        gazanArr[i].eat();
    }
    for (let i in manArr) {
        manArr[i].eat();
    }
    for (let i in cityArr) {
        cityArr[i].die();
    }
}


