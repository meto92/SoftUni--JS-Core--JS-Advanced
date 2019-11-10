function sum() {
    let tableRows = document.querySelectorAll('table tr');

    let sum = [...tableRows].slice(1)
        .map(row => row.cells[row.cells.length - 1].textContent)
        .reduce((a, b) => a + +b, 0);

    document.getElementById('sum').textContent = sum;
}