function getOrderedRectangles(rectanglesParams) {
    let createRectangle = (width, height) => {
        let rectangle = {
            width,
            height,
            area: function() {
                return this.width * this.height;
            },
            compareTo: function(other) {
                let thisArea = this.area();
                let otherArea = other.area();
    
                return otherArea - thisArea || other.width - this.width;
            }
        };

        return rectangle;
    };

    let rectangles = [];

    rectanglesParams.forEach(rectParams => {
        let width = rectParams[0];
        let heigh = rectParams[1];

        let rectangle = createRectangle(width, heigh);

        rectangles.push(rectangle);
    });

    return rectangles.sort((a, b) => a.compareTo(b));
}