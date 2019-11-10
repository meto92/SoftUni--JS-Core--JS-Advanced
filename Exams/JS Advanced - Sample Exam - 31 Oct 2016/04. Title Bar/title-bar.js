class TitleBar {
    constructor(title) {
        this.element = $("<header>")
            .addClass("header");

        $("<div>").addClass("header-row")
            .append($("<a>")
                .addClass("button")
                .text("&#9776;")
                .click((e) => {
                    const $div = $(e.target).parents("header.header")
                        .children("div.drawer"); 

                    $div.css("display") === "none"
                        ? $div.css("display", "block")
                        : $div.css("display", "none");
                }))
            .append($("<span>")
                .addClass("title")
                .text(title))
            .appendTo(this.element);

        $("<div>").addClass("drawer")
            .css("display", "none")
            .append($("<nav>")
                .addClass("menu"))
            .appendTo(this.element);
    }

    addLink(href, name) {
        let $menu = this.element.children("div.drawer")
            .children("nav.menu");

        $("<a>").addClass("menu-link")
            .attr("href", href)
            .text(name)
            .appendTo($menu);
    }

    appendTo(selector) {
        $(selector).append(this.element);
    }
}