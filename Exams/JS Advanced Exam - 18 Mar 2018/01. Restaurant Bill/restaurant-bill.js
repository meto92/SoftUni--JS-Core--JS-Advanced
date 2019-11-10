function addProduct() {
    let $tbody = $("#product-list");
    let $total = $("#bill tfoot td:last-child");
    let $newProduct = $("#add-product").find("input[type=text]");
    let $newProductPrice = $("#add-product").find("input[type=number]");
    
    if (!$newProduct.val()
        || !$newProductPrice.val()
        || +$newProductPrice.val() < 0
        ) {
            return;
    }
    
    let newProductName = $newProduct.val();
    let newProductPrice = +$newProductPrice.val();

    $("<tr>")
        .append($("<td>")
            .text(newProductName))
        .append($("<td>")
            .text(newProductPrice.toFixed(2)))
        .appendTo($tbody);

    $total.text(+$total.text() + newProductPrice);
    
    $newProduct.val("");
    $newProductPrice.val("");
  }