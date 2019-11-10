function attachEvent(btnSelector) {
    let $btn = $(btnSelector);	

    $btn.click(showSummary);

    function showSummary() {
        let $highlighted = $("#content").children("p")
            .children("strong")
            .toArray()
            .map(el => el.textContent)
            .join("");
            
        $("#content").children("#summary")
            .remove();
            
        $("<div>").attr("id", "summary")
            .append($("<h2>").text("Summary"))
            .append($("<p>").text($highlighted))
            .appendTo("#content");
    }
}