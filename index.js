// Your code here


class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((val, acc) => val + acc, 0)
    }

}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            const [a, b, c] = this.sides;
            return a + b > c && b + c > a && a + c > b;
        }
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            return this.perimeter % 4 === 0;
        }
        return false
    }

    get area() {
        return this.sides[0] * this.sides[0];
    }
}