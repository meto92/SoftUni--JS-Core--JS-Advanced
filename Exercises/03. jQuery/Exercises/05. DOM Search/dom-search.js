function domSearch(selector, isSearchCaseSensitive) {
    let container = $(selector);

    let $addDiv = $("<div>").addClass("add-controls");

    $("<label>").text("Enter text:")
        .appendTo($addDiv);

    $("<input>").attr("id", "newItem")
        .appendTo($addDiv);
        
    $("<a>").attr("href", "#")
        .css("display", "inlline-block")
        .addClass("button")
        .text("Add")
        .click((e) => {
            //e.preventDefault();
            //e.stopPropagation();
           
            let $newItemField = $("#newItem");
            
            if (!$newItemField.val()) {
                return;
            }

            $("<li>")
                .addClass("list-item")
                .append($("<a>")
                    .attr("href", "#")
                    .text("X")
                    .addClass("button")
                    .click((e) => {
                        //e.preventDefault();
                        //e.stopPropagation();

                        $(e.target).parent().remove();
                }))
                .append($("<strong>")
                    .text($newItemField.val()))
                .appendTo($("ul.items-list"));

            $newItemField.val("");
        })
        .appendTo($addDiv);

    let $searchDiv = $("<div>").addClass("search-controls");

    $("<label>").text("Search:")
        .appendTo($searchDiv);
    $("<input>").attr("id", "searchText")
        .on("input", () => {
            $("div.result-controls ul.items-list li.list-item")
                .css("display", "none")
                .filter((index, li) => {
                    return isSearchCaseSensitive
                        ? li.textContent.includes($("#searchText").val())
                        : li.textContent.toLowerCase().includes($("#searchText").val().toLowerCase());
                })
                .css("display", "");
        })
        .appendTo($searchDiv);

    let $resultsDiv = $("<div>").addClass("result-controls");

    $("<ul>").addClass("items-list")
        .appendTo($resultsDiv);

    container.append($addDiv);
    container.append($searchDiv);
    container.append($resultsDiv);
}