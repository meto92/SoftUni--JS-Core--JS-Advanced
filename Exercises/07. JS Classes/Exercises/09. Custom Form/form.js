let result = (function() {
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
  
    class Form {
        constructor(...textBoxes) {
            this._textBoxes = [];
            
            textBoxes.forEach(obj => {
                if (!(obj instanceof Textbox)) {
                    throw new Error("Object is not of type TextBox");
                }

                this._textBoxes.push(obj);
            });

            this._element = $("<div>").addClass("form");

            this._textBoxes.forEach(textBox => {
                this._element.append(textBox.elements);
            });
        }

        submit() {
            let invalidTextBoxesCount = 0;

            this._textBoxes.forEach(textBox => {
                if (textBox.isValid()) {
                    textBox.elements.css("border", "2px solid green");
                } else {
                    textBox.elements.css("border", "2px solid red");

                    invalidTextBoxesCount++;
                }
            });

            return !invalidTextBoxesCount;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}())

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);

username.value = "username";
password.value = "password2";

let form = new Form(username, password);

form.attach("#root");