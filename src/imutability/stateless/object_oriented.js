class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    moveBy(dx, dy){
        this.x = this.x + dx;
        this.y = this.y + dy;

    }
}

let point = new Point(1, 1);
point.moveBy(2, 2);

console.log(point);