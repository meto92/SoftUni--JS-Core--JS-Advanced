function addDestination() {
    const $cityField = $("#input input:eq(0)");
    const $countryField = $("#input input:eq(1)");
    const $seasons = $("#seasons");
    const $destinations = $("#destinationsList");

    const city = $cityField.val();
    const country = $countryField.val();
    let season = $seasons.find("option:selected").text();

    if (!city || !country) {
        return;
    }

    $("<tr>")
        .append($("<td>")
            .text(`${city}, ${country}`))
        .append($("<td>")
            .text(season))
        .appendTo($destinations);

    season = season.toLowerCase();

    $cityField.val("");
    $countryField.val("");
    
    $(`#${season}`).val(+$(`#${season}`).val() + 1);
}