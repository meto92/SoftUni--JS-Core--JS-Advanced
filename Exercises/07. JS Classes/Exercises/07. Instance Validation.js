class CheckingAccount {
    static validateName(value, nameType) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`${nameType} name must be between 3 and 20 characters long`);
        }

        if (/[^a-zA-Z]/.test(value)) {
            throw new TypeError(`${nameType} name must contain only Latin characters`);
        }
    }
    
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;

        this.products = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if (!+value || value.length !== 6) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (!/^[a-zA-Z]+@[a-zA-Z.]+$/.test(value)) {
            throw new TypeError("Invalid e-mail");
        }

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        CheckingAccount.validateName(value, "First");

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        CheckingAccount.validateName(value, "Last");

        this._lastName = value;
    }
}