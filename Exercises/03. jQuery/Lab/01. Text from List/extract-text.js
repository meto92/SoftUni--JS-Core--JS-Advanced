function extractText() {
    let joinedItemsText = $("ul#items li").toArray()
        .map(li => li.textContent)
        .join(", ")

    $("#result").text(joinedItemsText);
}