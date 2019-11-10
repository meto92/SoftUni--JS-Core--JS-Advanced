let assert = require("chai").assert;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("rgbToHexColor", () => {
    it("should return undefined when some argument is not number", () => {
        assert.isUndefined(rgbToHexColor("", 0, 0));
        assert.isUndefined(rgbToHexColor(0, [], 0));
        assert.isUndefined(rgbToHexColor(0, 0, {}));
    });
    
    it("should return undefined when some argument is missing or is out of range", () => {
        assert.isUndefined(rgbToHexColor());
        assert.isUndefined(rgbToHexColor(0));
        assert.isUndefined(rgbToHexColor(0, 0));
        assert.isUndefined(rgbToHexColor(-1, 0, 0));
        assert.isUndefined(rgbToHexColor(0, -1, 0));
        assert.isUndefined(rgbToHexColor(0, 0, -1));
        assert.isUndefined(rgbToHexColor(256, 0, 0));
        assert.isUndefined(rgbToHexColor(0, 256, 0));
        assert.isUndefined(rgbToHexColor(0, 0, 256));
    });

    it("should return correct hex representation", () => {
        assert.equal(rgbToHexColor(0, 0, 0), "#000000");
        assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
        assert.equal(rgbToHexColor(128, 128, 128), "#808080");
        assert.equal(rgbToHexColor(119, 119, 119), "#777777");
        assert.equal(rgbToHexColor(0, 127, 255), "#007FFF");
    });
});