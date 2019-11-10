const SortedList = require("./SortedList");
const assert = require("chai").assert;

describe("SortedList", () => {
    let list = null;

    beforeEach(() => {
        list = new SortedList();
    });

    it("should have needed functions", () => {
        const neededFunctions = [
            "add",
            "remove",
            "get"
        ];

        assert.isTrue(neededFunctions.every(funcName => typeof SortedList.prototype[funcName] === "function"));
    });

    it("should have size gettet", () => {
        assert.isTrue(SortedList.prototype.hasOwnProperty("size"));
        assert.isTrue(typeof list.size !== "function");
    });

    it("should have initial size 0", () => {
        assert.isTrue(list.size === 0);
    });

    it("should keep elements sorted after every add()", () => {
        list.add(5);
        list.add(4);

        assert.equal(JSON.stringify(list.list), JSON.stringify([4, 5]));

        list.add(3);

        assert.equal(JSON.stringify(list.list), JSON.stringify([3, 4, 5]));

        list.add(2);

        assert.equal(JSON.stringify(list.list), JSON.stringify([2, 3, 4, 5]));

        list.add(1);

        assert.equal(JSON.stringify(list.list), JSON.stringify([1, 2, 3, 4, 5]));
    });

    describe("remove()", () => {
        it("should remove correct element", () => {
            list.add(2);
            list.add(1);
            list.remove(1);
    
            assert.equal(JSON.stringify(list.list), JSON.stringify([1]));
        });

        it("should decrease size", () => {
            list.add(2);
            list.add(1);
            list.remove(1);
    
            assert.equal(list.size, 1);
        });

        
        it("should throw when list is empty", () => {
            assert.throw(() => {
                list.remove(0);
            }, Error);
        });

        it("should throw when index is out of range", () => {
            list.add(1);
            list.add(2);
            
            assert.throw(() => {
                list.remove(-1);
            }, Error);

            assert.throw(() => {
                list.remove(2);
            }, Error);
        });
    });

    describe("get()", () => {
        it("should return elements in sorted order", () => {
            const count = 10;
            
            for (let i = count - 1; i >= 0; i--) {
                list.add(i);                
            }

            for (let i = 0; i < count; i++) {
                assert.equal(list.get(i), i);
            }
        });

        it("should throw when list is empty", () => {
            assert.throw(() => {
                list.get(0);
            }, Error);
        });

        it("should throw when index is out of range", () => {
            list.add(1);
            list.add(2);
            
            assert.throw(() => {
                list.get(-1);
            }, Error);

            assert.throw(() => {
                list.get(2);
            }, Error);
        });
    });
});