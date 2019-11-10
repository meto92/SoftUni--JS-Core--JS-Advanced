const Calculator = require("./Calculator");
const assert = require("chai").assert;

describe("Calculator", () => {
    let calc = null;

    beforeEach(() => calc = new Calculator());

    it("should have array expenses initially empty", () => {
        assert.isTrue(calc.hasOwnProperty("expenses"));
        assert.isTrue(JSON.stringify(calc.expenses) === "[]");
    });

    it("should have needed functions", () => {
        const requiredFunctions = [
            "add",
            "divideNums",
            "orderBy",
            "toString"
        ];

        requiredFunctions.forEach(funcName => {
            assert.property(Calculator.prototype, funcName);
            assert.isTrue(typeof Calculator.prototype[funcName] === "function");
        });
    });

    it("add should take any kind of parameters and add them to expenses", () => {
        calc.add(1);
        calc.add(0);
        calc.add(-1);
        calc.add("1");
        calc.add("");
        calc.add([]);
        calc.add([1]);
        calc.add({});
        calc.add(NaN);
        calc.add(null);
        calc.add(undefined);

        assert.equal(calc.expenses.length, 11);
    });

    describe("divideNums()", () => {
        it("should throw error when there are no numbers in expenses", () => {
            const expectedErrorMessage = "There are no numbers in the array!";
            
            assert.throw(() => {
                calc.divideNums();
            }, Error, expectedErrorMessage);
        });

        it("should divide numbers correctly", () => {
            calc.add(20);
            calc.add(2);
            calc.add(10);

            const result = calc.divideNums();

            assert.equal(result, 1);
        });

        it("should work with floating point numbers", () => {
            calc.add(20);
            calc.add(1.1);
            calc.add(3.3);

            const result = calc.divideNums();

            assert.closeTo(result, 5.5096, 0.001);
        });        

        it("should divide numbers when there are any values of any type", () => {
            calc.add(20.0);
            calc.add(2);
            calc.add(10);
            calc.add("10");
            calc.add("100");

            const result = calc.divideNums();

            assert.equal(result, 1);
        });

        it("should return correct message instead of dividing by zero", () => {
            calc.add(20);
            calc.add(0);

            const result = calc.divideNums();

            assert.equal(result, "Cannot divide by zero");
        });
    });

    describe("toString()", () => {
        it("should return 'empty array' when array is empty", () => {
            const result = calc.toString();

            assert.equal(result, "empty array");
        });

        it("should return elements separated by ' -> '", () => {
            calc.add(1);
            calc.add(2);
            calc.add(3);

            const result = calc.toString();

            assert.equal(result, "1 -> 2 -> 3");
        });
    });

    describe("orderBy()", () => {
        it("should return 'empty' when array is empty", () => {
            const result = calc.orderBy();

            assert.equal(result, "empty");
        });

        it("should return sorted numbers ascending when all elements are numbers", () => {
            calc.add(1);
            calc.add(-1);
            calc.add(5.5);
            calc.add(4);

            const result = calc.orderBy();

            assert.equal(result, "-1, 1, 4, 5.5");
        });

        it("should sort values by default for mixed data", () => {
            const values = [
                1,
                {x: 2},
                "-1",
                "string",
                null,
                undefined,
                [1, 2, 3]
            ];

            values.forEach(val => calc.add(val));

            const result = calc.orderBy();
            const expected = values.sort().join(", ");

            assert.equal(result, expected);
        });
    });
});