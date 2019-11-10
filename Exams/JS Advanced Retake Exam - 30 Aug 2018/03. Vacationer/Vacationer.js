class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.addCreditCardInfo(creditCard);
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(names) {
        if (typeof names !== "object" || names.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        
        const [firstName, middleName, lastName] = names;
        const regex = /^[A-Z][a-z]*$/;

        if (!regex.test(firstName)
            || !regex.test(middleName)
            || !regex.test(lastName)
            ) {
                throw new Error("Invalid full name");
            }

        this._fullName = {
            firstName,
            middleName,
            lastName
        };
    }

    addCreditCardInfo(value = [1111, "", 111]) {
        if (value.length < 3) {
            throw new Error("Missing credit card information");
        }

        const [cardNumber, expirationDate, securityNumber] = value;
        
        if (typeof cardNumber !== "number" || typeof securityNumber !== "number") {
            throw new Error("Invalid credit card details");
        }
        
        this.creditCard = {
            cardNumber,
            expirationDate,
            securityNumber
        };
    }

    generateIDNumber() {
        let idNumber = (231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length).toString();

        if (["a", "e", "o", "i", "u"].includes(this.fullName.lastName[this.fullName.lastName.length - 1])) {
            idNumber += 8;
        } else {
            idNumber += 7;
        }

        return idNumber.toString();
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }

        this.wishList.push(destination);

        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        const firstName = this.fullName.firstName;
        const middleName = this.fullName.middleName;
        const lastName = this.fullName.lastName;
        const idNumber = this.idNumber;
        const wishes = this.wishList.length === 0
            ? "empty"
            : this.wishList.join(", ");
        const cardNumber = this.creditCard.cardNumber;
        const expirationDate = this.creditCard.expirationDate;
        const securityNumber = this.creditCard.securityNumber;

        const rows = [
            `Name: ${firstName} ${middleName} ${lastName}`,
            `ID Number: ${idNumber}`,
            `Wishlist:\n${wishes}`,
            "Credit Card:",
            `Card Number: ${cardNumber}`,
            `Expiration Date: ${expirationDate}`,
            `Security Number: ${securityNumber}`
        ];

        return rows.join("\n");
    }
}