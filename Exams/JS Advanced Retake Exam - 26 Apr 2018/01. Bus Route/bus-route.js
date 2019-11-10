function busRoute() {
    let $busStopsOl = $("#bus-stops");
    let $selectedBusStopsUl = $("#selected-bus-stops");
    let $firstStopField = $("#enter-stops").find("input[name=first-stop]");
    let $lastStopField = $("#enter-stops").find("input[name=last-stop]");
    let $selectedRouteSpan = $("#selected-route span");
    
    let firstStop = +$firstStopField.val();
    let lastStop = +$lastStopField.val();
    
    let busStops = $busStopsOl.children();
    
    if (firstStop <= 0 || lastStop > busStops.length || !Number.isInteger(firstStop) || !Number.isInteger(lastStop) || firstStop >= lastStop) {
        return;
    }
    
    $selectedRouteSpan.text(`${firstStop}-${lastStop}`);
    $selectedBusStopsUl.empty();
    
    busStops.filter((index, li) => index >= firstStop - 1 && index < lastStop)
        .each((index, li) => {
            $("<li>").text(li.textContent)
                .appendTo($selectedBusStopsUl);
        });
        
    $firstStopField.val("");
    $lastStopField.val("");
}