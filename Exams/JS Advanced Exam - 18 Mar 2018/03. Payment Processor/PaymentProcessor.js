class PaymentProcessor {
    constructor(options) {
        this.payments = {};
        this.options = {};
        this.setOptions(options);
    }

    registerPayment(id, name, type, value) {
        if (typeof id !== "string" || !id || this.payments[id]
            || typeof name !== "string" || !name
            || typeof value !== "number"
            || !this.options.types.includes(type)
            ) {
                throw new Error("Invalid payment!");
        }

        this.payments[id] = {
            name,
            type,
            value: value.toFixed(this.options.precision)
        };
    }

    static hasPaymentWithGivenId(payments, id) {
        return !!payments[id];
    }

    static ensurePayment(payments, id) {
        if (!PaymentProcessor.hasPaymentWithGivenId(payments, id)) {
            throw new Error("Payment with given id does not exist!");
        }
    }

    deletePayment(id) {
        PaymentProcessor.ensurePayment(this.payments, id);

        this.payments[id] = null;
    }

    get(id) {
        PaymentProcessor.ensurePayment(this.payments, id);

        const payment = this.payments[id];

        let result = `Details about payment ID: ${id}\n`;

        result += `- Name: ${payment.name}\n`;
        result += `- Type: ${payment.type}\n`;
        result += `- Value: ${payment.value}`;

        return result;
    }

    static get defaultOptions() {
        return {
            types: ["service", "product", "other"],
            precision: 2
        };
    }

    setOptions(options) {
        if (!options) {
            this.options = PaymentProcessor.defaultOptions;

            return;
        }

        Object.entries(options)
            .forEach(([key, value]) => {
                this.options[key] = value;
            });

        if (!this.options.types && !options.types) {
            this.options.types = PaymentProcessor.defaultOptions.types;
        }

        if (!this.options.precision && !options.precision) {
            this.options.precision = PaymentProcessor.defaultOptions.precision;
        }
    }

    toString() {
        let result = `Summary:\n`;

        const payments = Object.values(this.payments)
            .filter(p => !!p);

        result += `- Payments: ${payments.length}\n`;
        result += `- Balance: ${payments.reduce((acc, cur) => acc + +cur.value, 0).toFixed(this.options.precision)}`;

        return result;
    }
}