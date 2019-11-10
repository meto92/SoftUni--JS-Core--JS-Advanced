const assert = require("chai").assert;
const PaymentPackage = require("./PaymentPackage");

describe("PaymentPackage", () => {
    let payentPackage = null;

    beforeEach(() => {
        paymentPackage = new PaymentPackage("name", 1);
    });
    
    describe("name", () => {
        it("getter shoud return given name to constructor", () => {
            assert.equal(paymentPackage.name, "name");
        });

        it("should change name using the accessor", () => {
            paymentPackage.name = "new name";

            assert.equal(paymentPackage.name, "new name");
        });

        it("should  throw error when given string is empty", () => {
            assert.throws(() => {
                paymentPackage.name = "";
            });
        });

        it("should  throw error when given argument is not string", () => {
            assert.throws(() => {
                paymentPackage.name = 1;
            });

            assert.throws(() => {
                paymentPackage.name = ["name"];
            });

            assert.throws(() => {
                paymentPackage.name = true;
            });

            assert.throws(() => {
                paymentPackage.name = {name: "name"};
            });
        });
    });
    
    describe("value", () => {
        it("getter shoud return given value to constructor", () => {
            assert.equal(paymentPackage.value, 1);
        });

        it("should change value using the accessor", () => {
            paymentPackage.value = 10;

            assert.equal(paymentPackage.value, 10);
        });

        it("should accept decimal numbers", () => {
            paymentPackage.value = 10.1;

            assert.equal(paymentPackage.value, 10.1);
        });

        it("should accept 0", () => {
            paymentPackage.value = 0;

            assert.equal(paymentPackage.value, 0);
        });

        it("should  throw error when given argument is < 0", () => {
            assert.throws(() => {
                paymentPackage.value = -0.1;
            });
        });

        it("should  throw error when given argument is not number", () => {
            assert.throws(() => {
                paymentPackage.value = "1";
            });

            assert.throws(() => {
                paymentPackage.value = [1];
            });

            assert.throws(() => {
                paymentPackage.value = true;
            });

            assert.throws(() => {
                paymentPackage.value = {value: 1};
            });
        });
    });

    describe("VAT", () => {
        it("should have default value 20", () => {
            assert.equal(paymentPackage.VAT, 20);
        });

        it("should change value using the accessor", () => {
            paymentPackage.VAT = 5;

            assert.equal(paymentPackage.VAT, 5);
        });

        it("should accept decimal numbers", () => {
            paymentPackage.VAT = 20.1;

            assert.equal(paymentPackage.VAT, 20.1);
        });

        it("should accept 0", () => {
            paymentPackage.VAT = 0;

            assert.equal(paymentPackage.VAT, 0);
        });

        it("should  throw error when given argument is < 0", () => {
            assert.throws(() => {
                paymentPackage.VAT = -0.1;
            });
        });

        it("should  throw error when given argument is not number", () => {
            assert.throws(() => {
                paymentPackage.VAT = "1";
            });

            assert.throws(() => {
                paymentPackage.VAT = [1];
            });

            assert.throws(() => {
                paymentPackage.VAT = true;
            });

            assert.throws(() => {
                paymentPackage.VAT = {value: 1};
            });
        });
    });

    describe("active", () => {
        it("should have default value true", () => {
            assert.isTrue(paymentPackage.active);
        });

        it("should change value using the accessor", () => {
            paymentPackage.active = false;

            assert.equal(paymentPackage.active, false);
        });

        it("should  throw error when given argument is not boolean", () => {
            assert.throws(() => {
                paymentPackage.active = "true";
            });

            assert.throws(() => {
                paymentPackage.active = [false];
            });

            assert.throws(() => {
                paymentPackage.active = {value: true};
            });
        });
    });

    describe("toString()", () => {
        it("should return string representation in the required format", () => {
            paymentPackage = new PaymentPackage("HR Services", 1500);

            const result = paymentPackage.toString();
            const expected = `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;

            assert.equal(result, expected);
        });

        it("shoudl append '(inactive)' to name if the package is not active", () => {
            paymentPackage = new PaymentPackage("HR Services", 1500);
            paymentPackage.active = false;            

            const result = paymentPackage.toString();
            const expected = `Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;

            assert.equal(result, expected);
        });
    });
});