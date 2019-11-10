function createExtensibleObject() {
    let obj = {
        extend: function(template) {
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
    };

    return obj;
}