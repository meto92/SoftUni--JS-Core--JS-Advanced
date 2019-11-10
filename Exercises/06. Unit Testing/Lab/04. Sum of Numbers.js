let assert = require("chai").assert;

function sum(arr) {
    let sum = 0;

    for (num of arr)
        sum += Number(num);
        
    return sum;
}

describe("sum", () => {
    it("should throw with {}}", () => {
        const input = {};
        
        assert.throws(() => {
            sum(input);
        });
    });

    it("should return NaN with string", () => {
        const input = "string";
        
        const result = sum(input);

        assert.isNaN(result);
    });

    it("should return 0 with []", () => {
        const input = [];
        
        const result = sum(input);

        assert.equal(result, 0);
    });

    it("should return NaN with string element in input", () => {
        const input = [0, "string"];
        
        const result = sum(input);

        assert.isNaN(result);
    });

    it("should return only element when input has length 1", () => {
        const input = [1];
        
        const result = sum(input);

        assert.equal(result, 1);
    });

    it("should sum positive numbers correctly", () => {
        const input = [1, 2, 3, 4];
        
        const result = sum(input);

        assert.equal(result, 10);
    });

    it("should sum negative numbers correctly", () => {
        const input = [-1, -2, -3, -4];
        
        const result = sum(input);

        assert.equal(result, -10);
    });

    it("should sum positive and negative numbers correctly", () => {
        const input = [1, -2, 3, -4];
        
        const result = sum(input);

        assert.equal(result, -2);
    });
});