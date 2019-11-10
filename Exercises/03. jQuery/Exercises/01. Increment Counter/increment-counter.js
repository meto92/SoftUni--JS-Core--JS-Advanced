function increment(selector) {
    let container = $(selector);

    $("<textarea>").val(0)
        .addClass("counter")
        .attr("disabled", "")
        .appendTo(container);
    //$("<textarea class='counter' disabled>0</textarea>").appendTo(container);

    $("<button>").attr("id", "incrementBtn")
        .addClass("btn")
        .text("Increment")
        .appendTo(container);
    //$("<button id='incrementBtn' class='btn'>Increment</button>").appendTo(container);

    $("<button>").attr("id", "addBtn")
        .addClass("btn")
        .text("Add")
        .appendTo(container);
    //$("<button id='addBtn' class='btn'>Add</button>").appendTo(container);
    
    $("<ul class='results'></ul>").appendTo(container);

    $("#incrementBtn").click((e) => {
        //e.preventDefault();
        //e.stopPropagation();

        $("textarea.counter").val(+$("textarea.counter").val() + 1);
    });

    $("#addBtn").click((e) => {
        //e.preventDefault();
        //e.stopPropagation();

        let li = $(`<li>${$("textarea.counter").val()}</li>`);

        $("ul.results").append(li);
    });
}