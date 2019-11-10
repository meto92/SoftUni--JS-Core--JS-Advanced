function extractText() {
    let items = [...document.querySelectorAll('ul#items li')]
        .map(element => element.textContent);

    document.getElementById('result').value = items.join('\n');
}