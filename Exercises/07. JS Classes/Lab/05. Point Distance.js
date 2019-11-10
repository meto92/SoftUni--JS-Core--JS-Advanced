class Point {
    constructor(x, y) {
        this.x = +x;
        this.y = +y;
    }

    static distance(point1, point2) {
        const deltaX = point1.x - point2.x;
        const  deltaY = point1.y - point2.y;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        return distance;
    }
}