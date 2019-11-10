function getFibonator() {
    let fn1 = 0;
    let fn2 = 1;

    function getNextFibonacciNumber() {
        let next = fn1 + fn2;

        fn1 = fn2;
        fn2 = next;

        return fn1;
    }

    return getNextFibonacciNumber;
}