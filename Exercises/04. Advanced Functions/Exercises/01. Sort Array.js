function getSortedArray(numbers, sortType) {
    let sorters = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return numbers.sort(sorters[sortType]);
}