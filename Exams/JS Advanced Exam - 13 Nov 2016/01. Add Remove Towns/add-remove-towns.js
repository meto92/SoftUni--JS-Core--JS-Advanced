function attachEvents() {
    let $select = $("#towns");
    let $newItemField = $("#newItem");

    $("#btnAdd").click(() => {
        let newItemText = $newItemField.val();

        if (!newItemText) {
            return;
        }

        $("<option>").text(newItemText)
            .appendTo($select);

        $newItemField.val("");
    });

    $("#btnDelete").click(() => {
        $select.find(":selected").remove();
    });
}