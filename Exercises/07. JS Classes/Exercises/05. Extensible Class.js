class Extensible {
    static get id() {
        return Extensible._id || 0;
    }

    static set id(value) {
        Extensible._id = value;
    }

    constructor() {
        this.id = Extensible.id++;
    }

    extend(template) {
        let prototype = Object.getPrototypeOf(this);

        [...Object.entries(template)]
            .forEach(([key, value]) => {
                if (typeof value === "function") {
                    prototype[key] = value;
                } else {
                    this[key] = value;
                }
            });
    }
}