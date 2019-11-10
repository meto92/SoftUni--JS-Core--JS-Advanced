let assert = require("chai").assert;
let jsdom = require("jsdom-global")();
let $ = require("jquery");

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe("nuke", () => {
    const originalHTML = 
        `<div id="target">
            <div class="nested target">
                <p>This is some text</p>
            </div>
            <div class="target">
                <p>Empty div</p>
            </div>
            <div class="inside">
                <span class="nested">Some more text</span>
                <span class="target">Some more text</span>
            </div>
        </div>`;
        
    beforeEach(() => document.body.innerHTML = originalHTML);

    it("should do nothing when either selector is invalid or omitted", () => {
        nuke();
        nuke(null, "#wrapper");
        nuke("#wrapper", null);
        nuke("wrapper", null);
        nuke(null, "wrapper");

        assert.equal(document.body.innerHTML, originalHTML);
    });

    it("should do nothing when selectors combination is incorrect", () => {
        nuke(".inside", "#target");
        nuke(".target", ".inside");

        assert.equal(document.body.innerHTML, originalHTML);
    });

    it("should do nothing when selectors are the same", () => {
        nuke(".inside", ".inside");

        assert.equal(document.body.innerHTML, originalHTML);
    });

    it("should remove elements when parameters are correct: 1", () => {
        const [selector1, selector2] = ["div", ".inside"];

        nuke(selector1, selector2);

        assert.equal($(`${selector1} ${selector2}`).length, 0);
    });

    it("should remove elements when parameters are correct: 2", () => {
        const [selector1, selector2] = [".nested", ".target"];

        nuke(selector1, selector2);

        assert.equal($(`${selector1} ${selector2}`).length, 0);
    });
});