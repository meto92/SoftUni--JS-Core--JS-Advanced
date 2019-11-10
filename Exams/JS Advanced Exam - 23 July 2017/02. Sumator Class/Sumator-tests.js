const Sumator = require("./Sumator");
const assert = require("chai").assert;

describe("Sumator", () => {
    let sumator = null;

    beforeEach(() => sumator = new Sumator());

    it("should have required functions", () => {
        const requiredFunctions = [
            "add",
            "sumNums",
            "removeByFilter",
            "toString"
        ];

        assert.isTrue(requiredFunctions.every(funcName => typeof Sumator.prototype[funcName] === "function"));
    });

    it("should have data property", () => {
        assert.property(sumator, "data");
    });

    it("should have data initialized with empty array", () => {
        assert.equal(JSON.stringify(sumator.data), JSON.stringify([]));
    });

    it("should be able to add item of any type", () => {
        assert.doesNotThrow(() => {
            sumator.add(0);
            sumator.add(1);
            sumator.add("");
            sumator.add("string");
            sumator.add([1, 2, 3]);
            sumator.add({});
            sumator.add(null);
            sumator.add(undefined);
        });

        assert.equal(sumator.data.length, 8);
    });

    describe("sumNums()", () => {
        it("should return zero when data is empty", () => {
            const result = sumator.sumNums();
            
            assert.equal(result, 0);
        });

        it("should return zero when there are no numbers in the data", () => {
            sumator.add("");
            sumator.add("0");
            sumator.add("1");
            sumator.add({});

            const result = sumator.sumNums();
            
            assert.equal(result, 0);
        });

        it("should sum any kind of numbers", () => {
            sumator.add(1);
            sumator.add(-1);
            sumator.add(2.2);
            sumator.add(-3.3);
            
            const result = sumator.sumNums();

            assert.closeTo(result, -1.1, 0.001);
        });

        it("should return sum of all numbers in data", () => {
            sumator.add(1);
            sumator.add(2);
            sumator.add(3);
            sumator.add(4);
            sumator.add("5");
            sumator.add("6");
            sumator.add(true);
            sumator.add([1]);
            sumator.add({});

            const result = sumator.sumNums();

            assert.equal(result, 10);
        });
    });

    describe("toString()", () => {
        it("should return 'empty' whene data is empty", () => {
            const result = sumator.toString();

            assert.equal(result, "(empty)");
        });

        it("should return items separated by ', '", () => {
            for (let i = 1; i <= 5; i++) {
                sumator.add(i);
            }

            const result = sumator.toString();

            assert.equal(result, "1, 2, 3, 4, 5");
        });
    });

    describe("removeByFilter(filterFunc)", () => {
        it("should not remove elements when function returns false", () => {
            for (let i = 1; i <= 5; i++) {
                sumator.add(i);
            }

            sumator.removeByFilter((x) => false);

            const result = sumator.toString();

            assert.equal(result, "1, 2, 3, 4, 5");
        });

        it("should remove correct elements", () => {
            for (let i = 1; i <= 5; i++) {
                sumator.add(i);
            }

            sumator.removeByFilter((x) => x % 2 === 0);

            const result = sumator.toString();

            assert.equal(result, "1, 3, 5");
        });
    });
});