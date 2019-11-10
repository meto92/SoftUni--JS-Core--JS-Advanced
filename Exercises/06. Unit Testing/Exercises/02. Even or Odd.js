let assert = require("chai").assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", () => {
    it("should return undefined with a number parameter", () => {
        assert.isUndefined(isOddOrEven(1));
    });

    it("should return undefined with an object parameter", () => {
        assert.isUndefined(isOddOrEven({name: "unknown"}));
    });

    it("should return undefined with an array parameter", () => {
        assert.isUndefined(isOddOrEven([1, 2, 3]));
    });

    it("should return odd with string with odd length", () => {
        assert.equal(isOddOrEven("odd"), "odd");
    });

    it("should return even with string with even length", () => {
        assert.equal(isOddOrEven("even"), "even");
    });

    it("should return correct values with multiple checks", () => {
        assert.equal(isOddOrEven("odd"), "odd");
        assert.equal(isOddOrEven("even"), "even");
        assert.equal(isOddOrEven("123"), "odd");
        assert.equal(isOddOrEven("1234"), "even");
    });
});