class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    createTable() {
        let $table = $("<table>");

        $("<caption>").text(`${this.title} Payment Manager`)
            .appendTo($table);

        $("<thead>").append($("<tr>")
            .append($("<th>").addClass("name").text("Name"))
            .append($("<th>").addClass("category").text("Category"))
            .append($("<th>").addClass("price").text("Price"))
            .append($("<th>").text("Actions")))
            .appendTo($table);

        $("<tbody>").addClass("payments")
            .appendTo($table);

        $("<tfoot>").addClass("input-data")
            .append($("<tr>")
                .append($("<td>")
                    .append($("<input>")
                        .attr("name", "name")
                        .attr("type", "text")))
                .append($("<td>")
                    .append($("<input>")
                        .attr("name", "category")
                        .attr("type", "text")))
                .append($("<td>")
                    .append($("<input>")
                        .attr("name", "price")
                        .attr("type", "number")))
                .append($("<td>")
                    .append($("<button>")
                        .text("Add")
                        .click((e) => {
                            let $tfoot = $(e.target).parents("table tfoot"); 

                            let nameField = $tfoot.find("tr td input[name=name]");
                            let categoryField = $tfoot.find("tr td input[name=category]");
                            let priceField = $tfoot.find("tr td input[name=price]");

                            let name = nameField.val();
                            let category = categoryField.val();
                            let price = priceField.val();

                            if (!name || !category || !price) {
                                return;
                            }

                            nameField.val("");
                            categoryField.val("");
                            priceField.val("");

                            let $tbody = $(e.target).parents("table")
                                .children("tbody.payments");

                            $("<tr>").append($("<td>").text(name))
                                .append($("<td>").text(category))
                                .append($("<td>").text(+price))
                                .append($("<td>")
                                    .append($("<button>")
                                        .text("Delete")
                                        .click((e) => {
                                            $(e.target).parents("tr:first")
                                                .remove();
                                        })))
                                .appendTo($tbody);
                        }))))
            .appendTo($table);

        this.table = $table;
    }

    render(id) {
        this.createTable();
        $(`#${id}`).append(this.table);
    }
}