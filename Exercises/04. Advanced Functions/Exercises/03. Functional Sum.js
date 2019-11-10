(() => {
    let sum = 0;

    function add(number) {
        sum += number;

        return add;
    }

    add.toString = () => sum;

    return add;
})();

function add(sum = 0) {
    addNumber.toString = () => sum;

    function addNumber(number) {
        sum += number;

        return add(sum);
    }

    return addNumber;
}