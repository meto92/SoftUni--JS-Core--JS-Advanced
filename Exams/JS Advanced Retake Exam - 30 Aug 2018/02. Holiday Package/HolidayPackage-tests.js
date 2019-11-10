const HolidayPackage = require("./HolidayPackage");
const assert = require("chai").assert;

describe("HolidayPackage", () => {
    const season = "Spring";
    const destination = "Sandanski";

    let hp = null;

    beforeEach(() => {
        hp = new HolidayPackage(destination, season);
    });

    it("should have required properties", () => {
        assert.property(hp, "destination")
        assert.property(hp, "season")
        assert.property(hp, "insuranceIncluded")
    });

    it("should have correct destination and season values", () => {
        assert.equal(hp.destination, destination);
        assert.equal(hp.season, season);
    });

    it("should have required functions", () => {
        const requiredFunctions = [
            "addVacationer",
            "showVacationers",
            "generateHolidayPackage"
        ];

        requiredFunctions.forEach(funcName => {
            assert.property(hp, funcName);
            assert.isTrue(typeof hp[funcName] === "function");
        });
    });

    it("should have array vacationers initially empty", () => {
        assert.equal(JSON.stringify(hp.vacationers), "[]");
    });

    describe("insuranceIncluded", () => {
        it("should have default value false", () => {
            assert.isFalse(hp.insuranceIncluded);
        });

        it("should have setter", () => {
            hp.insuranceIncluded = true;

            assert.isTrue(hp.insuranceIncluded);

            hp.insuranceIncluded = false;

            assert.isFalse(hp.insuranceIncluded);
        });

        it("should throw error when given parameter is not boolean", () => {
            assert.throw(() => {
                hp.insuranceIncluded = 1;
            }, Error);

            assert.throw(() => {
                hp.insuranceIncluded = "0";
            }, Error);

            assert.throw(() => {
                hp.insuranceIncluded = {};
            }, Error);
        });
    });
    
    describe("addVacationer()", () => {
        it("should add valid names", () => {
            hp.addVacationer("First Last");

            assert.equal(hp.vacationers.length, 1);
        });

        it("should throw error when name is invalid", () => {
            assert.throws(() => {
                hp.addVacationer({});
            }, Error);

            assert.throws(() => {
                hp.addVacationer(" ");
            }, Error);

            assert.throws(() => {
                hp.addVacationer("invalid");
            }, Error);

            assert.throws(() => {
                hp.addVacationer("1 2 3");
            }, Error);
        });
    });

    describe("showVacationers()", () => {
        it("should return 'No vacationers are added yet' when vacationers are missing", () => {
            const result = hp.showVacationers();

            assert.equal(result, "No vacationers are added yet");
        });

        it("should return correct string", () => {
            hp.addVacationer("Ivan Invanov");
            hp.addVacationer("Ivanko Ivankov");

            const result = hp.showVacationers();

            assert.equal(result, `Vacationers:\nIvan Invanov\nIvanko Ivankov`);
        });
    });

    describe("generateHolidayPackage()", () => {
        it("should generate correct string", () => {
            hp = new HolidayPackage("Sandanski", "Spring");

            hp.addVacationer("1 2");
            hp.addVacationer("3 4");

            const result = hp.generateHolidayPackage();
            const expected = "Holiday Package Generated\n" +
                "Destination: Sandanski\n" +
                "Vacationers:\n1 2\n3 4\n" +
                "Price: 800";

            assert.equal(result, expected);
        });

        it("should increase total price by 100 when insurance is included", () => {
            hp = new HolidayPackage("Sandanski", "Spring");

            hp.insuranceIncluded = true;            
            hp.addVacationer("1 2");
            hp.addVacationer("3 4");

            const result = hp.generateHolidayPackage();
            const expected = "Holiday Package Generated\n" +
                "Destination: Sandanski\n" +
                "Vacationers:\n1 2\n3 4\n" +
                "Price: 900";

            assert.equal(result, expected);
        });

        it("should increase total price by 200 when season is Winter", () => {
            hp = new HolidayPackage("Sandanski", "Winter");

            hp.addVacationer("1 2");
            hp.addVacationer("3 4");

            const result = hp.generateHolidayPackage();
            const expected = "Holiday Package Generated\n" +
                "Destination: Sandanski\n" +
                "Vacationers:\n1 2\n3 4\n" +
                "Price: 1000";

            assert.equal(result, expected);
        });

        it("should increase total price by 200 when seasom is Summer", () => {
            hp = new HolidayPackage("Sandanski", "Summer");

            hp.addVacationer("1 2");
            hp.addVacationer("3 4");

            const result = hp.generateHolidayPackage();
            const expected = "Holiday Package Generated\n" +
                "Destination: Sandanski\n" +
                "Vacationers:\n1 2\n3 4\n" +
                "Price: 1000";

            assert.equal(result, expected);
        });

        it("should throw error when there are no vacationers", () => {
            assert.throws(() => {
                hp.generateHolidayPackage();
            }, Error, "There must be at least 1 vacationer added");
        });
    });
});