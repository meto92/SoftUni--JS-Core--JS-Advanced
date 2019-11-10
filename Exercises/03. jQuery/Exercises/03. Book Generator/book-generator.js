function createBook(selector, bookTitle, bookAuthor, isbn) {
    let container = $(selector);

    let divId = "book" + (container.children().length + 1);

    let div = $("<div>").attr("id", divId)
        .css("border", "medium none");

    let titleParagraph = $("<p>").addClass("title")
        .text(bookTitle);
    let authorParagraph = $("<p>").addClass("author")
        .text(bookAuthor);
    let isbnParagraph = $("<p>").addClass("isbn")
        .text(isbn);
    let selectBtn = $("<button>").text("Select")
        .click((e) => {
            $(e.target).parent().css("border", "2px solid blue")
        });
    let deselectBtn = $("<button>").text("Deselect")
        .click((e) => {
            $(e.target).parent().css("border", "")
        });

    div.append(titleParagraph, authorParagraph, isbnParagraph, selectBtn, deselectBtn);

    container.append(div);
}