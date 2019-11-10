function aggregate(numbers) {
    let sum = numbers.reduce((a, b) => a + b);
    let min = numbers.reduce((min, cur) => Math.min(min, cur), Number.MAX_SAFE_INTEGER);
    let max = numbers.reduce((max, cur) => Math.max(max, cur), Number.MIN_SAFE_INTEGER);
    let product = numbers.reduce((product, cur) => product * cur, 1);
    let join = numbers.reduce((acc, cur) => acc + cur, '');

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}