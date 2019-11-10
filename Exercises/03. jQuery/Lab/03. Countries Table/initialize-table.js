function initializeTable() {
    let $table = $("#countriesTable");

    function createRow(country, capital) {
        let countryTd = $("<td>").text(country);
        let capitalTd = $("<td>").text(capital);

        let $row = $("<tr>")
            .append(countryTd)
            .append(capitalTd);

        return $row;
    }

    function fixActions() {
        let $actionTds = $("#countriesTable tr td:last-child").slice(1);
        
        $actionTds.children("a.moveUp")
            .css("display", "inline");
        $actionTds.children("a.moveDown")
            .css("display", "inline");

        $actionTds.children("a.moveUp:first")
            .css("display", "none");
        $actionTds.children("a.moveDown:last")
            .css("display", "none");
    }

    function moveUp(e) {
        //e.preventDefault();
        //e.stopPropagation();

        let row = $($(e.target).parents("tr:first"));

        row.insertBefore(row.prev());

        fixActions();
    } 

    function moveDown(e) {
        //e.preventDefault();
        //e.stopPropagation();

        let $row = $($(e.target).parents("tr:first"));

        $row.insertAfter($row.next());

        fixActions();
    }

    function deleteRow(e) {
        //e.preventDefault();
        //e.stopPropagation();
        
        $(e.target).parent().parent().remove();

        fixActions();
    }

    function addMoveUpAction($actionTd) {
        const $upAction = $("<a>")
            .attr("href", "#")
            .addClass("moveUp")
            .text("[Up]")
            .click(moveUp);

        $actionTd.prepend($upAction);
    }

    function addMoveDownAction($actionTd) {
        const $downAction = $("<a>")
            .attr("href", "#")
            .addClass("moveDown")
            .text("[Down]")
            .click(moveDown);
        
        $actionTd.append($downAction);
    }

    function addDeleteAction($actionTd) {
        const $deleteAction = $("<a>")
            .attr("href", "#")
            .addClass("delete")
            .text("[Delete]")
            .click(deleteRow);

        $actionTd.append($deleteAction);
    }

    function addCountryToTable(country, capital) {
        let $row = createRow(country, capital);
        let $actionTd = $("<td>");
        
        addMoveUpAction($actionTd);
        addMoveDownAction($actionTd);
        addDeleteAction($actionTd);

        $row.append($actionTd);

        $table.append($row);

        fixActions();
    }

    function addNewCountry() {
        let $countryField = $("#newCountryText");
        let $capitalField = $("#newCapitalText");
        
        let country = $countryField.val();
        let capital = $capitalField.val();

        $countryField.val("");
        $capitalField.val("")

        if (!country || !capital) {
            return;
        }

        addCountryToTable(country, capital);
    }

    $("#createLink").click(addNewCountry);

    (function populateTable() {
        addCountryToTable("Bulgaria", "Sofia");
        addCountryToTable("Germany", "Berlin");
        addCountryToTable("Russia", "Moscow");
    })();
}