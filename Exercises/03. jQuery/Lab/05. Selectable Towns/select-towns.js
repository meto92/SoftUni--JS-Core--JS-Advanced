function attachEvents() {
    const dataSelected = "data-selected";

    function selectTown(e) {
        //e.preventDefault();
        //e.stopPropagation();

        let $target = $(e.target);

        if (!$target.attr(dataSelected)) {
            $target.attr(dataSelected, "true");
            $target.css("background", "#DDD");
        } else {
            $target.removeAttr(dataSelected);
            $target.css("background", "");
        }
    }

    function showSelectedTowns() {
        $("#selectedTowns").text("Selected towns: " + $("#items li[data-selected=true]")
            .toArray()
            .map(li => li.textContent)
            .join(", "));
    }

    $("ul#items li").click(selectTown);
    $("#showTownsButton").click(showSelectedTowns);
}