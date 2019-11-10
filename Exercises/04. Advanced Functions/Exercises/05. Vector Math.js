(function getVectorFunctionsObj() {
    let functionsObj = {
        add: ([x1, y1], [x2, y2]) => {
            return [x1 + x2, y1 + y2];
        },
        multiply: ([x, y], scalar) => {
            return [x * scalar, y * scalar];
        },
        length: ([x, y]) => {
            return Math.sqrt(x ** 2 + y ** 2);
        },
        dot: ([x1, y1], [x2, y2]) => {
            return x1 * x2 + y1 * y2;
        },
        cross: ([x1, y1], [x2, y2]) => {
            return x1 * y2 - x2 * y1;
        }
    }
    
    return functionsObj;
})()