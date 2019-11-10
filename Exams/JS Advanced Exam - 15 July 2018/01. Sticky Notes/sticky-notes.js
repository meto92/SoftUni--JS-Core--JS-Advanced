function addSticker() {
    const $titleField = $("input.title");
    const $contentField = $("input.content");
    const $stickersList = $("#sticker-list");

    const title = $titleField.val().trim();
    const content = $contentField.val().trim();
    
    if (!title || !content) {
        return;
    }

    $("<li>").addClass("note-content")
        .append($("<a>")
            .addClass("button")
            .attr("href", "#")
            .text("x")
            .click((e) => {
                $(e.target).parents("li:first")
                    .remove();
            }))
        .append($("<h2>")
            .text(title))
        .append($("<hr>"))
        .append($("<p>")
            .text(content))
        .appendTo($stickersList);

    $titleField.val("");
    $contentField.val("");
}