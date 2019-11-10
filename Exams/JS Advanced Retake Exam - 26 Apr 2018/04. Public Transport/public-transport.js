class PublicTransportTable {
    constructor(town) {
        this.town = town;
        
        this.setCaption();
        this.attachEvents();
    }

    setCaption() {
        let $caption = $("table caption"); 
        let caption = $caption.text();

        $caption.text(caption.replace(caption.substring(0, caption.indexOf("'")), this.town));
    }

    attachEvents() {
        const $tbody = $("table tbody");
        const $searchBtn = $("button.search-btn");
        const $clearBtn = $("button.clear-btn");
        const $typeField = $("table thead").find("input[name=type]");
        const $nameField = $("table thead").find("input[name=name]");

        $searchBtn.click(() => {
            $tbody.find("tr.show-info, tr.hide-info")
                .show()
                .filter((index, tr) => {
                    let includesType = $(tr).find("td:first")
                        .text()
                        .includes($typeField.val());

                    let includesName = $(tr).find("td:nth-child(2)")
                        .text()
                        .includes($nameField.val());

                    return !includesType || !includesName;
                })
                .hide()
                .filter((index, tr) => {
                    return $(tr).hasClass("show-info");
                })
                .each((index, tr) => {
                    let $row = $(tr);

                    $row.removeClass("show-info")
                        .addClass("hide-info");

                    $row.find("td button")
                        .text("More Info");

                    $row.next().remove();
                });
        });

        $clearBtn.click(() => {
            $tbody.find("tr")
                .show();

            $typeField.val("");
            $nameField.val("");
        });
    }

    addVehicle(obj) {
        let $tbody = $("table tbody");

        $("<tr>").addClass("hide-info")
            .append($("<td>")
                .text(obj.type))
            .append($("<td>")
                .text(obj.name))
            .append($("<td>")
                .append($("<button>")
                    .text("More Info")
                    .click((e) => {
                        let $btn = $(e.target);
                        let $row = $btn.parents("tr:first");

                        if ($btn.text() === "Less Info") {
                            $btn.text("More Info");
                            $row.removeClass("show-info")
                                .addClass("hide-info");

                            $row.next().remove();

                            return;
                        }

                        $btn.text("Less Info");
                        $row.removeClass("hide-info")
                            .addClass("show-info");

                        $("<tr>").addClass("more-info")
                            .append($("<td>")
                                .attr("colspan", "3")
                                .append($("<table>")
                                    .append($("<tr>")
                                        .append($("<td>")
                                            .text(`Route: ${obj.route}`)))
                                    .append($("<tr>")
                                        .append($("<td>")
                                            .text(`Price: ${obj.price}`)))
                                    .append($("<tr>")
                                        .append($("<td>")
                                            .text(`Driver: ${obj.driver}`)))))
                            .insertAfter($row);
                    })))
            .appendTo($tbody);
    }
}