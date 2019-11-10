function calendar([day, month, year]) {
    let date = new Date(year, month - 1, 1);
    let daysInCurrentMonth = new Date(year, month, 0).getDate();

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September", 
        "October",
        "November",
        "December"
    ];

    let $table = $("<table>");

    $("<caption>").text(`${monthNames[date.getMonth()]} ${year}`)
        .appendTo($table);

    let $tbody = $("<tbody>");

    $table.append($tbody);

    $("<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>")
        .appendTo($tbody);

    let firstRowEmptyCells = date.getDay() === 0 
        ? 6
        : date.getDay() - 1;

    let $row = $("<tr>");

    let currentDayOfWeekCounter = 0;

    for (let day = 0; day < firstRowEmptyCells; day++, currentDayOfWeekCounter++) {
        $("<td>").appendTo($row);
    }

    for (let currentDay = 1; currentDay <= daysInCurrentMonth; currentDay++, currentDayOfWeekCounter++) {
        let td = $("<td>").text(currentDay);

        if (currentDay == day) {
            td.addClass("today");
        }

        if (currentDayOfWeekCounter && currentDayOfWeekCounter % 7 === 0) {
            $tbody.append($row);
            $row = $("<tr>");
        }

        $row.append(td);
    }

    if (currentDayOfWeekCounter % 7 > 0) {
        let daysToPrintFromNextMonth = 7 - currentDayOfWeekCounter % 7;
    
        for (let day = 0; day < daysToPrintFromNextMonth; day++) {
            $("<td>").appendTo($row);
        }
    }

    $tbody.append($row);

    $("#content").append($table);
}