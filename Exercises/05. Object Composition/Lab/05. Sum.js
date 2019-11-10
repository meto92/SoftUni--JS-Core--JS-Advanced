function solve() {
    let obj = {
        element1: null,
        element2: null,
        resultElement: null,
        init: function(selector1, selector2, resultSelector) {
            this.element1 = $(selector1);
            this.element2 = $(selector2);
            this.resultElement = $(resultSelector);
        },
        add: function() {
            let num1 = +this.element1.val();
            let num2 = +this.element2.val();

            let result = num1 + num2;

            this.resultElement.val(result);
        },
        subtract: function() {
            let num1 = +this.element1.val();
            let num2 = +this.element2.val();

            let result = num1 - num2;

            this.resultElement.val(result);
        }
    };

    return obj;
}