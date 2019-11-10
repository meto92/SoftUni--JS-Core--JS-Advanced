const createList = require("./List");
const assert = require("chai").assert;

describe("list", () => {
    let list;
    
    beforeEach(() => {
        list = createList();
    });

    it("list should be object", () => {
        assert.isObject(list);
    });

    it("should have needed functions", () => {
        const neededFunctions = [
            "add",
            "shiftLeft",
            "shiftRight",
            "swap",
            "toString"
        ];

        const listKeys = Object.keys(list);

        assert.isTrue(neededFunctions.every(prop => listKeys.includes(prop)));
        assert.isTrue(neededFunctions.every(funcName => typeof list[funcName] === "function"));
    });

    describe("toString()", () => {
        it("should return empty string when list is empty", () => {
            const result = list.toString();
            
            assert.equal(result, "");
        });

        it("should return elements in order of adding", () => {
            list.add(1);
            list.add(2);
            list.add("three");

            const result = list.toString();

            assert.equal(result, "1, 2, three");    
        });
    });

    describe("shiftLeft()", () => {
        it("should not modify list with 1 item", () => {
            list.add(1);
            list.shiftLeft();

            const result = list.toString();

            assert.equal(result, "1");
        });

        it("should rotate left all elements", () => {
            list.add(1);
            list.add(2);
            list.add("three");
            list.shiftLeft();

            const result = list.toString();

            assert.equal(result, "2, three, 1");
        });
    });

    describe("shiftRight()", () => {
        it("should not modify list with 1 item", () => {
            list.add(1);
            list.shiftRight();

            const result = list.toString();

            assert.equal(result, "1");
        });

        it("should rotate right all elements", () => {
            list.add(1);
            list.add(2);
            list.add("three");
            list.shiftRight();

            const result = list.toString();

            assert.equal(result, "three, 1, 2");
        });
    });

    describe("swap(index1, index2)", () => {
        it("should not modify collection and return false when indices are equal", () => {
            list.add(1);
            list.add(2);
            list.add(3);

            const swapResult = list.swap(1, 1);
            const toStringResult = list.toString();

            assert.isFalse(swapResult);
            assert.equal(toStringResult, "1, 2, 3");
        });

        it("should not modify collection and return false when 1 of the indices is out of range or not integer", () => {
            list.add(1);
            list.add(2);
            list.add(3);

            const swapResult = list.swap(-1, 1) 
                || list.swap(0, 3)
                || list.swap("0", 1)
                || list.swap(0, "1")
                || list.swap({}, 1)
                || list.swap([0], 1);

            const toStringResult = list.toString();

            assert.isFalse(swapResult);
            assert.equal(toStringResult, "1, 2, 3");
        });

        it("should swap values and return true when indices are valid", () => {
            list.add(1);
            list.add(2);
            list.add(3);

            const swapResult = list.swap(0, 1);
            const toStringResult = list.toString();

            assert.isTrue(swapResult);
            assert.equal(toStringResult, "2, 1, 3");
        });

        it("should swap values and return true when indices are valid (2)", () => {
            list.add(1);
            list.add(2);
            list.add(3);

            const swapResult = list.swap(1, 0);
            const toStringResult = list.toString();

            assert.isTrue(swapResult);
            assert.equal(toStringResult, "2, 1, 3");
        });
    });
});