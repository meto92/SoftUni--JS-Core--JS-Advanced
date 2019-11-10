function colorize() {
    let rows = document.querySelectorAll('table tr');

    [...rows].slice(1)
        .filter((row, index) => index % 2 === 0)
        .forEach(row => row.style.background = 'teal');
}