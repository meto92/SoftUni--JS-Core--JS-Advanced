function acceptance() {
	const $acceptanceForm = $("#acceptanceForm");
	const $companyField = $acceptanceForm.find("input[name=shippingCompany]");
	const $productNameField = $acceptanceForm.find("input[name=productName]");
	const $productQuantityField = $acceptanceForm.find("input[name=productQuantity]");
	const $productScrapeField = $acceptanceForm.find("input[name=productScrape]");
	const $warehouse = $("#warehouse");

	const company = $companyField.val();
	const productName = $productNameField.val();
	const productQuantity = $productQuantityField.val();
	const productScrape = $productScrapeField.val();
	
	$companyField.val("");
	$productNameField.val("");
	$productQuantityField.val("");
	$productScrapeField.val("");

	if (!company
		|| !productName
		|| !productQuantity || !+productQuantity
		|| !productScrape || !+productScrape
		|| +productQuantity <= +productScrape
	) {
		return;
	}

	const peaces = +productQuantity - +productScrape;

	$("<div>")
		.append($("<p>")
			.text(`[${company}] ${productName} - ${peaces} pieces`))
		.append($("<button>")
			.attr("type", "button")
			.text("Out of stock")
			.click((e) => {
				$(e.target).parents("div:first").remove();
			}))
		.appendTo($warehouse);
}