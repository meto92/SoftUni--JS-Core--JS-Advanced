const list = require("./list");
const assert = require("chai").assert;

describe("list", () => {
    afterEach(() => {
        while (list.delete(0));
    });

    it("should have needed functions", () => {
        assert.property(list, "add");
        assert.property(list, "delete");
        assert.property(list, "toString");
    });
    
    it("toString should return empty string when list is empty", () => {
        assert.equal(list.toString(), "");
    });

    it("should add item at the end", () => {
        list.add(1);
        list.add("2");
        list.add(3);
        list.add(4);

        const result = list.toString();

        assert.equal(result, "1, 2, 3, 4");
    });

    it("should return deleted item when correct index is given", () => {
        list.add(1);
        list.add(2);
        list.add(3);

        const deleteResult = list.delete(1);
        const toStringResult = list.toString();

        assert.equal(deleteResult, "2");
        assert.equal(toStringResult, "1, 3");
    });

    describe("delete with incorrect index", () => {
        it("should return undefined when index is out of range", () => {
            assert.isUndefined(list.delete(-1));
            assert.isUndefined(list.delete(3));
            assert.isUndefined(list.delete(123));
        });

        it("should return undefined when index is not integer", () => {
            assert.isUndefined(list.delete(0.1));
            assert.isUndefined(list.delete(1.1));
        });

        it("should return undefined when index is not number", () => {
            assert.isUndefined(list.delete("0"));
            assert.isUndefined(list.delete("string"));
            assert.isUndefined(list.delete({}));
            assert.isUndefined(list.delete([0]));
        });
		
		it("should delete first element correctly", () => {
            list.add(1);
            list.add(3);
            list.add(4);

            const deletedElement = list.delete(0);
			const toStringResult = list.toString();

			assert.equal(deletedElement, 1);
			assert.equal(toStringResult, "3, 4");
		});
		
		it("should delete last element correctly", () => {
            list.add(3);
            list.add(4);

            const deletedElement = list.delete(1);
			const toStringResult = list.toString();

			assert.equal(deletedElement, 4);
			assert.equal(toStringResult, "3");
		});
    });
});