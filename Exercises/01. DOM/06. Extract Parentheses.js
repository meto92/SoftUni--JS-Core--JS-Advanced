function extract(elementId) {
    let regex = /\([^)]+\)/g;

    let elementValue = document.getElementById(elementId).textContent;

    let matches = elementValue.match(regex);

    let result = '';

    if (matches) {
        result = matches.map(match => match.substring(1, match.length - 1))
            .join('; ');
    }

    return result;
}