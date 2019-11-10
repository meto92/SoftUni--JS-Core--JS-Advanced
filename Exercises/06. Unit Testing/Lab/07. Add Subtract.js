let assert = require("chai").assert;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe("createCalculator", () => {
    let calculator;
    
    beforeEach(() => {
        calculator = createCalculator();
    });

    it("should return object", () => {
        assert.isObject(calculator);
    });

    it("should have needed functions", () => {
        const requiredFunctions = ["add", "subtract", "get"];

        const objKeys = Object.keys(calculator);
        
        assert.isTrue(requiredFunctions.every(prop => objKeys.includes(prop)), "Some function is missing.");
        assert.isTrue(requiredFunctions.every(prop => typeof calculator[prop] === "function"), "Expected function is not of type function");
    });

    it("should have initial value 0", () => {
        const result = calculator.get();
        
        assert.equal(result, 0);
    });

    it("should add correctly", () => {
        calculator.add(1);

        const result = calculator.get();

        assert.equal(result, 1);
    });

    it("should add correctly several times", () => {
        calculator.add(1);
        calculator.add(2);
        calculator.add(3);
        calculator.add(4);

        const result = calculator.get();

        assert.equal(result, 10);
    });

    it("should subtract correctly several times", () => {
        calculator.subtract(1);
        calculator.subtract(2);
        calculator.subtract(3);
        calculator.subtract(4);

        const result = calculator.get();

        assert.equal(result, -10);
    });

    it("should add and subtract correctly", () => {
        calculator.add(1);
        calculator.add(2);
        calculator.add(3);
        calculator.subtract(-4);

        const result = calculator.get();

        assert.equal(result, 10);
    });

    it("should add and subtract correctly real numbers", () => {
        calculator.add(1.1);
        calculator.add(2.2);
        calculator.add(3.3);
        calculator.subtract(-4.4);

        const result = calculator.get();

        assert.equal(result, 11);
    });

    it("should return NaN when string is given to add", () => {
        calculator.add("add");

        const result = calculator.get();

        assert.isNaN(result);
    });

    it("should return NaN when string is given to subtract", () => {
        calculator.subtract("subtract");

        const result = calculator.get();

        assert.isNaN(result);
    });

    it("should convert given parameters to numbers", () => {
        calculator.add(1);
        calculator.add("2");
        calculator.subtract("1");

        const result = calculator.get();

        assert.equal(result, 2);
    });
});