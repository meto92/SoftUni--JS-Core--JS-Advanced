const assert = require("chai").assert;

function makeList() { let data = []; return { addLeft: function (item) { data.unshift(item); }, addRight: function (item) { data.push(item); }, clear: function () { data = []; }, toString: function () { return data.join(", "); } }; }

describe("list", () => {
    let list = null;

    beforeEach(() => list = makeList());

    it("toString should return empty string when lis is empty", () => {
        const result = list.toString();

        assert.equal(result, "");
    });

    it("addLeft should add items at the beginning of the list", () => {
        let values = [];

        for (let i = 0; i < 10; i++) {
            values.unshift(i);
            list.addLeft(i);
        }

        const result = list.toString();

        assert.equal(result, values.join(", "));
    });

    it("addRight should add items at the end of the list", () => {
        let values = [];

        for (let i = 0; i < 10; i++) {
            values.push(i);
            list.addRight(i);
        }

        const result = list.toString();

        assert.equal(result, values.join(", "));
    });

    it("clear should remove all elements in the list", () => {
        for (let i = 0; i < 10; i++) {
            list.addRight(i);
        }

        list.clear();

        const result = list.toString();

        assert.equal(result, "");
    });

    it("addLeft and addRight should work together correctly", () => {
        list.addLeft(4);
        list.addLeft("3");
        list.addLeft("two");
        list.addLeft(1.1);
        list.addRight(5000);

        const result = list.toString();

        assert.equal(result, "1.1, two, 3, 4, 5000")
    });

    it("should be able to add objects", () => {
        list.addLeft({length: 2});

        assert.equal(list.toString(), "[object Object]")
    });
});