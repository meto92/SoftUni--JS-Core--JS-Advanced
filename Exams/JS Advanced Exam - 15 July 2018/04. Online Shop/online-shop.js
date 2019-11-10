function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    
    $(selector).html(form);
    
    const $productField = $("input[placeholder='Enter product']");
    const $priceField = $("#price");
    const $quantityField = $("#quantity");
    const $submitBtn = $("#submit");
    const $inventoryUl = $("ul:first")
    const $capacityField = $("#capacity");
    const $sumField = $("#sum");

    const maxProducts = 150;
    let productsQuantity = 0;
    let totalSum = 0;

    $productField.on("input", () => {
        if ($productField.val()) {
            $submitBtn.removeAttr("disabled");
        } else {
            $submitBtn.attr("disabled", "");
        }
    });

    $submitBtn.click(() => {
        const product = $productField.val();
        const price = +$priceField.val();
        const quantity = +$quantityField.val();

        if (productsQuantity + quantity > maxProducts) {
            return;
        }

        $("<li>").text(`Product: ${product} Price: ${price} Quantity: ${quantity}`)
            .appendTo($inventoryUl);

        totalSum += price;
        productsQuantity += quantity;

        $productField.val("");
        $priceField.val("1");
        $quantityField.val("1");
        $submitBtn.attr("disabled", "");
        $capacityField.val(productsQuantity);
        $sumField.val(totalSum);

        if (productsQuantity === maxProducts) {
            $productField.attr("disabled", "");
            $priceField.attr("disabled", "");
            $quantityField.attr("disabled", "");
            $capacityField.val("full")
                .addClass("fullCapacity");
        }
    });
}