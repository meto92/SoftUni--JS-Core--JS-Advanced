class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this._invalidSymbols = regex;

        let that = this;

        $(this._elements).on("input", function() {
            that.value = this.value;
        });
    }

    get value() {
        return this._elements.val();
    }

    set value(value) {
        this._elements.val(value);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', () => console.log(textbox.value));