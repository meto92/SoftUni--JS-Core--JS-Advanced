function move(command) {
    const $availableTownsSelect = $("#available-towns");
    const $selectedTownsSelect = $("#selected-towns");
    const $outputDiv = $("#output");

    function moveLeft() {
        let $option = $selectedTownsSelect.find(":selected");

        if (!$option.length) {
            return;
        }

        $option.remove();
        $("<option>").text($option.text())
            .appendTo($availableTownsSelect);
    }

    function moveRight() {
        let $option = $availableTownsSelect.find(":selected");

        if (!$option.length) {
            return;
        }

        $option.remove();
        $("<option>").text($option.text())
            .appendTo($selectedTownsSelect);
    }

    function print() {
        const joinedSelectedTowns = $selectedTownsSelect.children()
            .toArray()
            .map(option => option.textContent)
            .join("; ");

        $outputDiv.text(joinedSelectedTowns);
    }
    
    switch (command) {
        case "left": 
            moveLeft();
            break;
        case "right": 
            moveRight();
            break;
        case "print": 
            print();
            break;
    }
}