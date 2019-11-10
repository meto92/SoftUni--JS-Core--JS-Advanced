class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this.createElement();

        this.online = false;
    }

    createElement() {
        let $article = $("<article>");

        $("<div>").addClass("title")
            .text(`${this.firstName} ${this.lastName}`)
            .append($("<button>")
                .text("&#8505;")
                .click((e) => {
                    let $div = $(e.target)
                        .parent()
                        .parent()
                        .children("div.info");

                    if ($div.css("display") === "none") {
                        $div.css("display", "block");
                    } else {
                        $div.hide();
                    }

                    // if ($div.is(":hidden")) {
                    //     $div.css("display", "block");
                    // } else {
                    //     $div.hide();
                    // }
                }))
            .appendTo($article);

        $("<div>").addClass("info")
            .hide()
            //.css("display", "none")
            .append($("<span>")
                .text(`&phone; ${this.phone}`))
            .append($("<span>")
                .text(`&#9993; ${this.email}`))
            .appendTo($article);

        this.element = $article;
    }

    render(id) {
        $(`#${id}`).append(this.element);
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = !!value;

        if (value) {
            this.element
                .children("div.title")
                .addClass("online");
        } else {
            this.element
                .children("div.title")
                .removeClass("online");
        }
    }
}