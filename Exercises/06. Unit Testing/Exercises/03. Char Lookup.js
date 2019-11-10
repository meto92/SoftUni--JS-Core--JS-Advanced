let assert = require("chai").assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }

    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar", () => {
    it("should return undefined when first parameter is not string", () => {
        const values = [
            0,
            1,
            [1],
            ["str"],
            {name: "unknwn"},
            false,
            null,
            undefined
        ];
        
        values.forEach(value => assert.isUndefined(lookupChar(value, 0)));
    });

    it("should return undefined when second parameter is not integer", () => {
        const values = [
            0.1,
            1.001,
            [1],
            ["str"],
            {name: "unknwn"},
            false,
            null,
            undefined
        ];
        
        values.forEach(value => assert.isUndefined(lookupChar("str", value)));
    });

    it("should return Incorrect index when both parameters are of correct type, but the value of the index is incorrect", () => {
        const str = "str";
        
        const indices = [
            -1,
            str.length,
            str.length + 1
        ];
        
        indices.forEach(index => assert.equal(lookupChar(str, index), "Incorrect index"));
    });

    it("should return correct char with correct parameters", () => {
        const str = "0123456789";

        [...str].forEach((char, index) => assert.equal(lookupChar(str, index), str[index]));
    });
});