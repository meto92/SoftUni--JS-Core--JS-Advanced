function calc() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;

    let sum = num1 + num2;

    document.getElementById('sum').value = sum;
}