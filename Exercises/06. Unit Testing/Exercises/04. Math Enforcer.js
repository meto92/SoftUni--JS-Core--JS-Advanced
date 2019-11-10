let assert = require("chai").assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", () => {
    it("should be object", () => {
        assert.isObject(mathEnforcer);
    });

    it("should have needed functions", () => {
        const requiredFunctions = [
            "addFive",
            "subtractTen",
            "sum"
        ];
        
        let objKeys = Object.keys(mathEnforcer);

        assert.isTrue(requiredFunctions.every(func => objKeys.includes(func)));
        assert.isTrue(requiredFunctions.every(func => typeof mathEnforcer[func] === "function"));
    });

    const nonNumbers = [
        "",
        "0",
        "1",
        [1],
        [1, 2, 3],
        {number: 1},
        true,
        false
    ];

    const numbers = [
        0,
        0.1,
        0.99999999999999,
        1,
        1.5,
        -1,
        -1.9999999999999,
        1000000000000000
    ];

    describe("addFive", () => {
        it("should return undefined when parameter is not a number", () => {
            nonNumbers.forEach(value => {
                const result = mathEnforcer.addFive(value);

                assert.isUndefined(result);
            });
        });

        it("should return close enough value when parameter is number", () => {
            numbers.forEach(number => {
                const result = mathEnforcer.addFive(number);

                assert.closeTo(result, number + 5, 0.01);
            });
        });
    });

    describe("subtractTen", () => {
        it("should return undefined when parameter is not a number", () => {
            nonNumbers.forEach(value => {
                const result = mathEnforcer.subtractTen(value);

                assert.isUndefined(result);
            });
        });

        it("should return close enough value when parameter is number", () => {
            numbers.forEach(number => {
                const result = mathEnforcer.subtractTen(number);

                assert.closeTo(result, number - 10, 0.01);
            });
        });
    });

    describe("sum", () => {
        it("should return undefined if any of he parameters is not a number", () => {
            nonNumbers.forEach(value => {
                const result = mathEnforcer.sum(value, 0);
                
                assert.isUndefined(result);
            });

            nonNumbers.forEach(value => {
                const result = mathEnforcer.sum(0, value);
                
                assert.isUndefined(result);
            }); 
        });

        it("should return close enough sum when both parameters are numbers", () => {
            numbers.forEach(num1 => {
                numbers.forEach(num2 => {
                    const result = mathEnforcer.sum(num1, num2);

                    assert.closeTo(result, num1 + num2, 0.01);
                });
            });
        });
    });
});