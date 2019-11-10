function makeReservation(selector) {
    const $container = $(selector);
    
    const $fullName = $("#fullName");
    const $email = $("#email");
    const $phoneNumber = $("#phoneNumber");
    const $address = $("#address");
    const $postalCode = $("#postalCode");
    const $submit = $("#submit");
    const $infoPreview = $("#infoPreview");
    const $edit = $("#edit");
    const $continue = $("#continue");

    $submit.click(() => {
        const fullName = $fullName.val().trim();
        const email = $email.val().trim();

        if (!fullName || !email) {
            return;
        }

        const phoneNumber = $phoneNumber.val();
        const address = $address.val();
        const postalCode = $postalCode.val();

        $infoPreview.append($("<li>")
            .text(`Name: ${fullName}`))
            .append($("<li>")
                .text(`E-mail: ${email}`))
            .append($("<li>")
                .text(`Phone: ${phoneNumber}`))
            .append($("<li>")
                .text(`Address: ${address}`))
            .append($("<li>")
                .text(`Postal Code: ${postalCode}`));

        $fullName.val("");
        $email.val("");
        $phoneNumber.val("");
        $address.val("");
        $postalCode.val("");


        $submit.attr("disabled", "");
        $edit.removeAttr("disabled");
        $continue.removeAttr("disabled");
    });

    $edit.click(() => {
        const $items = $infoPreview.children();

        $items.remove();

        const values = [...$items]
            .map(li => li.textContent
                .substring(li.textContent.indexOf(":") + 2));
            
        const fullName = values[0];
        const email = values[1];
        const phoneNumber = values[2];
        const address = values[3];
        const postalCode = values[4];
        
        $fullName.val(fullName);
        $email.val(email);
        $phoneNumber.val(phoneNumber);
        $address.val(address);
        $postalCode.val(postalCode);

        $submit.removeAttr("disabled");
        $edit.attr("disabled", "");
        $continue.attr("disabled", "");
    });

    $continue.click(() => {
        $edit.attr("disabled", "");
        $continue.attr("disabled", "");

        $container.append($("<h2>")
            .text("Payment details"))
            .append($("<select>")
                .attr("id", "paymentOptions")
                .addClass("custom-select")
                .append($("<option>")
                    .attr("selected", "")
                    .attr("disabled", "")
                    .attr("hidden", "")
                    .text("Choose"))
                .append($("<option>")
                    .val("creditCard")
                    .text("Credit Card"))
                .append($("<option>")
                    .val("bankTransfer")
                    .text("Bank Transfer"))
                .change((e) => {
                    const type = $(e.target).find(":selected").val();
                    
                    const $extraDiv = $("#extraDetails");

                    $extraDiv.empty();
                    
                    if (type === "creditCard") {
                        appendCreditCardOptions();
                    } else if (type === "bankTransfer") {
                        appendBankOptions();
                    }

                    function appendCreditCardOptions() {
                        $extraDiv.append($("<div>")
                            .addClass("inputLabel")
                            .text("Card Number")
                            .append($("<input>")))
                            .append("<br>")
                            .append($("<div>")
                                .addClass("inputLabel")
                                .text("Expiration Date")
                                .append($("<input>")))
                            .append("<br>")
                            .append($("<div>")
                                .addClass("inputLabel")
                                .text("Security Numbers")
                                .append($("<input>")))
                            .append("<br>")
                            .append($("<button>")
                                .attr("id", "checkOut")
                                .text("Check Out")
                                .click(thankForTheReservation));
                    };

                    function appendBankOptions() {
                        $extraDiv.append($("<p>")
                            .html("You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890"))
                            .append($("<button>")
                                .attr("id", "checkOut")
                                .text("Check Out")
                                .click(thankForTheReservation));
                    };

                    function thankForTheReservation() {
                        $("#wrapper").empty();

                        $("#wrapper").append($("<h4>")
                            .text("Thank you for your reservation!"));
                    };
                }))
            .append($("<div>")
                .attr("id", "extraDetails"));

        const chooseOption = document.querySelector("option");

        chooseOption.setAttribute("selected", "");
        chooseOption.setAttribute("disabled", "");
        chooseOption.setAttribute("hidden", "");
    });
}