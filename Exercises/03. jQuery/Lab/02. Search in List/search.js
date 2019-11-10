function search() {
    let searchText = $("#searchText").val().toLowerCase();

    let matches = $("#towns li")
        .css("font-weight", "")
        .filter((index, elem) => {
            return elem.textContent.toLowerCase().includes(searchText);
        })
        .css("font-weight", "bold")
        .length;

    $("#result").text(`${matches} matches found.`);
}