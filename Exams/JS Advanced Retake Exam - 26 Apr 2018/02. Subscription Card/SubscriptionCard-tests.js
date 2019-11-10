const SubscriptionCard = require("./SubscriptionCard");
const assert = require("chai").assert;

describe("SubscriptionCard", () => {
    let card = null;

    beforeEach(() => {
        card = new SubscriptionCard("M", "P", "000");
    });

    it("should have 'firstName' getter", () => {
        assert.equal(card.firstName, "M");
    });

    it("should not be able to change 'firstName'", () => {
        card.firstName = "A";

        assert.equal(card.firstName, "M");
    })

    it("should have 'lastName' getter", () => {
        assert.equal(card.lastName, "P");
    });

    it("should not be able to change 'lastName'", () => {
        card.lastName = "A";

        assert.equal(card.lastName, "P");
    })

    it("should have 'SSN' getter", () => {
        assert.equal(card.SSN, "000");
    });

    it("should not be able to change 'SSN'", () => {
        card.SSN = "111";

        assert.equal(card.SSN, "000");
    })

    it("card should be initially available", () => {
        assert.isFalse(card.isBlocked);
    });

    it("block() should block the card", () => {
        card.block();

        assert.isTrue(card.isBlocked);
    });
   
    it("unblock() should unblock the card", () => {
        card.block();
        card.unblock();

        assert.isFalse(card.isBlocked);
    });

    describe("isValid()", () => {
        const startDate = new Date('2018-04-22');
        const endDate = new Date('2018-05-21');
        const dateBeforeStartDate = new Date('2018-04-20');
        const dateAfterEndtDate = new Date('2018-05-22');
        const dateBetweenStartDateAndEndDate = new Date('2018-04-25');

        it("should return true if given date is equal to subscription start date", () => {
            card.addSubscription('120', startDate, endDate);

            const result = card.isValid("120", startDate);

            assert.isTrue(result);
        });
        
        it("should return true if given date is equal to subscription end date", () => {
            card.addSubscription('120', startDate, endDate);

            const result = card.isValid("120", endDate);

            assert.isTrue(result);
        });

        it("should return true if given date is between subscription start date and end date", () => {
            card.addSubscription('120', startDate, endDate);

            const result = card.isValid("120", dateBetweenStartDateAndEndDate);

            assert.isTrue(result);
        });

        it("should return true if exist subscription with line '*' and date is in range", () => {
            card.addSubscription('*', startDate, endDate);

            const result = card.isValid("120", startDate);

            assert.isTrue(result);
        });

        it("should return false if exist subscription with line '*' and date is before start date", () => {
            card.addSubscription('*', startDate, endDate);

            const result = card.isValid("120", dateBeforeStartDate);

            assert.isFalse(result);
        });

        it("should return false if exist subscription with line '*' and date is after end date", () => {
            card.addSubscription('*', startDate, endDate);

            const result = card.isValid("120", dateAfterEndtDate);

            assert.isFalse(result);
        });

        it("should return false if there is not subscription '*' and line does not exist", () => {
            card.addSubscription('120', startDate, endDate);

            const result = card.isValid("110", startDate);

            assert.isFalse(result);
        });

        describe("should return false if card is blocked", () => {
            it("given date is equal to subscription start date", () => {
                card.addSubscription('120', startDate, endDate);
                card.block();

                const result = card.isValid("120", startDate);
    
                assert.isFalse(result);
            });
            
            it("should return true if given date is equal to subscription end date", () => {
                card.addSubscription('120', startDate, endDate);
                card.block();
    
                const result = card.isValid("120", endDate);
    
                assert.isFalse(result);
            });
    
            it("should return true if given date is between subscription start date and end date", () => {
                card.addSubscription('120', startDate, endDate);
                card.block();
    
                const result = card.isValid("120", dateBetweenStartDateAndEndDate);
    
                assert.isFalse(result);
            });
    
            it("should return true if exist subscription with line '*' and date is in range", () => {
                card.addSubscription('*', startDate, endDate);
                card.block();
    
                const result = card.isValid("120", startDate);
    
                assert.isFalse(result);
            });
        });
    })
});