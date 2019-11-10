function attachEvents() {
    let $btnDelete = $("#btnDelete");
    let $townName = $("#townName");
    let $select = $("#towns");
    let $result = $("#result");

    $btnDelete.click(() => {
        let input = $townName.val();
        
        let isDeleted = $select.children()
            .filter((index, option) => {
                return $(option).text() === input
            }).remove()
            .length > 0;
        
        let result = isDeleted
            ? `${input} deleted.`
            : `${input} not found.`;

        $result.text(result);
    });
}