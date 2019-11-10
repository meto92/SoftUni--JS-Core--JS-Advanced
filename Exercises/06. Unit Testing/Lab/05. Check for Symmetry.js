let assert = require("chai").assert;

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    
    return equal;
}

describe("isSymmetric", () => {
    it("should return false when object is given", () => {
        assert.equal(isSymmetric({}), false);
    });

    it("should return false when empty string is given", () => {
        assert.equal(isSymmetric(""), false);
    });

    it("should return false when symmetric string is given", () => {
        assert.equal(isSymmetric("12321"), false);
    });


    it("should return false when input is not array", () => {
        assert.equal(isSymmetric(121), false);
    });

    it("should return false when input array is not symmetric", () => {
        assert.equal(isSymmetric([1, 2, 3]), false);
        assert.equal(isSymmetric(["1", "2", "3"]), false);
    });

    it("should return true when input array is symmetric", () => {
        assert.equal(isSymmetric([1, 2, 3, 2, 1]), true);
        assert.equal(isSymmetric(["1", "2", "3", "2", "1"]), true);
        assert.equal(isSymmetric([{a: 5, b: 10}, 1, 2, 3, 2, 1, {a: 5, b: 10}]), true);
    });
});