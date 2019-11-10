function tableBuilder(selector) {
    let $container = $(selector);

    function createTable(columnNames) {
        let $table = $("<table>");
        let $row = $("<tr>");
        
        $table.append($row);
        
        columnNames.forEach(columnName => {
            $("<th>").text(columnName)
                .appendTo($row);			
        });
        
        $("<th>").text("Action")
            .appendTo($row);
            
        $container.html($table);
    }
   
   function fillData(rows) {
        let $table = $(`${selector} table`);
        
        rows.forEach(args => {
            let $row = $("<tr>");
            
            args.forEach(arg => {
                $("<td>").text(arg)
                    .appendTo($row);
            });
            
            $row.append($("<td>")
                .append($("<button>")
                .text("Delete")
                    .click((e) => {
                        $(e.target).parents().remove("tr:first");
                    })))
                .appendTo($table);
        });
   }
   
   return {
        createTable,
        fillData
   };
}