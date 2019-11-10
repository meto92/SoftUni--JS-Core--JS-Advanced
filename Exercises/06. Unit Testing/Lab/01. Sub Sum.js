function subsum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    startIndex = Math.max(startIndex, 0);
    endIndex = Math.min(endIndex, array.length - 1);

    let result = array.filter((elem, index) => index >= startIndex && index <= endIndex)
        .reduce((a, b) => a + +b, 0);

    return result;
}