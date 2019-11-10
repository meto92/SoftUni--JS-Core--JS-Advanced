let assert = require("chai").assert;
let jsdom = require("jsdom-global")();
let $ = require("jquery");

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe("sharedObject", () => {
    const originalHTML = 
        `<div id="wrapper">
            <input type="text" id="name">
            <input type="text" id="income">
        </div>`;

    const nameFieldSelector = "#name";
    const incomeFieldSelector = "#income";

    beforeEach(() => {
        document.body.innerHTML = originalHTML;
        
        sharedObject.name = null;
        sharedObject.income = null;
    });

    describe("initial values", () => {
        it("should have null for name initial value", () => {
            assert.isNull(sharedObject.name);
        });

        it("should have null for income initial value", () => {
            assert.isNull(sharedObject.income);
        });
    });

    describe("changeName", () => {
        it("should not change name when empty string is given", () => {
            sharedObject.changeName("");

            assert.isNull(sharedObject.name);
            assert.equal($(nameFieldSelector).val(), "");
        });

        it("should change name when string is not empty", () => {
            const name = "unknown";
            
            sharedObject.changeName(name);

            assert.equal(sharedObject.name, name);
            assert.equal($(nameFieldSelector).val(), name);
        })
    });

    describe("changeIncome", () => {
        it("should not change income when parameter is not number or is <= 0", () => {
            const values = [
                "",
                -1,
                0,
                1.1
            ];
            
            values.forEach(value => {
               sharedObject.changeIncome(value);
               
               assert.isNull(sharedObject.income);
               assert.equal($(incomeFieldSelector).val(), "");
            });
        });

        it("should change income when parameter is integer > 0", () => {
            const values = [
                1,
                20,
                1000,
                123456789
            ];
            
            values.forEach(value => {
               sharedObject.changeIncome(value);
               
               assert.equal(sharedObject.income, value);
               assert.equal($(incomeFieldSelector).val(), value);
            });
        })
    });

    describe("updateName", () => {
        it("should not change object's name when name field is empty", () => {
            sharedObject.updateName();

            assert.isNull(sharedObject.name);
        });

        it("should change object's name when name field is not empty", () => {
            const values = [
                " ",
                "123",
                "name",
                "unknown"  
            ];

            values.forEach(value => {
                $(nameFieldSelector).val(value);

                sharedObject.updateName();

                assert.equal(sharedObject.name, value);
            });
        });
    });

    describe("updateIncome", () => {
        it("should not change object's income when income field value cannot be parsed as integer > 0", () => {
            const values = [
                0,
                false,
                "",
                0.1,
                -0.1,
                1.1,
                -1.1,
                -10,
                10.1,
                1000000000000.1
            ];

            values.forEach(value => {
                $(incomeFieldSelector).val(value);

                sharedObject.updateIncome();

                assert.isNull(sharedObject.income);
            });
        });

        it("should change object's income when income field value can be parsed as integer > 0", () => {
            const values = [
                1,
                10,
                100,
                10000,
                1000000000000
            ];

            values.forEach(value => {
                $(incomeFieldSelector).val(value);

                sharedObject.updateIncome();

                assert.equal(sharedObject.income, value);
            });
        });
    });
});