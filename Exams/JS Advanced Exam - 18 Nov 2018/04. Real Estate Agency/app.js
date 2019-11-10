function realEstateAgency () {
	const $agencyProfit = $("#roof h1");
	const $regOffer = $("#regOffer");
	const $rentPriceField = $regOffer.find("input[name=apartmentRent]");
	const $apartmentTypeField = $regOffer.find("input[name=apartmentType]");
	const $commissionRateField = $regOffer.find("input[name=agencyCommission]");
	const $regOfferBtn = $regOffer.find("button[name=regOffer]");
	const $building = $("#building");
	const $findOffer = $("#findOffer");
	const $familyBudgetField = $findOffer.find("input[name=familyBudget]");
	const $familyApartmentTypeField = $findOffer.find("input[name=familyApartmentType]");
	const $familyNameField = $findOffer.find("input[name=familyName]");
	const $findOfferBtn = $findOffer.find("button[name=findOffer]");
	const $message = $("#message");

	const showMessage = (message) => {
		$message.text(message);
	};

	$regOfferBtn.click((e) => {
		const rentPrice = +$rentPriceField.val();
		const apartmentType = $apartmentTypeField.val();
		const commissionRate = $commissionRateField.val();

		$rentPriceField.val("");
		$apartmentTypeField.val("");
		$commissionRateField.val("");

		if (!rentPrice || rentPrice <= 0
			|| !apartmentType
			|| !commissionRate || +commissionRate < 0 || +commissionRate > 100
		) {
			showMessage("Your offer registration went wrong, try again.");

			return;
		}

		showMessage("Your offer was created successfully.");

		$("<div>").addClass("apartment")
			.append($("<p>")
				.text(`Rent: ${rentPrice}`))
			.append($("<p>")
				.text(`Type: ${apartmentType}`))
			.append($("<p>")
				.text(`Commission: ${commissionRate}`))
			.appendTo($building);
	});

	$findOfferBtn.click(() => {
		const familyBudget = +$familyBudgetField.val();
		const familyApartmentType = $familyApartmentTypeField.val();
		const familyName = $familyNameField.val();

		if (familyBudget <= 0 || !familyApartmentType || !familyName) {
			return;
		}

		let apartmentDiv = $(".apartment")
			.filter((index, div) => {
				const $div = $(div);

				const rentPrice = +$div.find("p:eq(0)").text().split(": ")[1];
				const aparmentType = $div.find("p:eq(1)").text().split(": ")[1];
				const commissionRate = +$div.find("p:eq(2)").text().split(": ")[1]

				return familyBudget >= rentPrice * (1 + commissionRate / 100) && familyApartmentType === aparmentType;
			})[0];

		$familyBudgetField.val("");
		$familyApartmentTypeField.val("");
		$familyNameField.val("");

		if (!apartmentDiv) {
			showMessage("We were unable to find you a home, so sorry :(");
			
			return;
		}

		const $apartmentDiv = $(apartmentDiv);

		$apartmentDiv.find("p:eq(0)").text(familyName);
		$apartmentDiv.find("p:eq(1)").text("live here now");

		const $commission = $apartmentDiv.find("p:eq(2)");

		const commission = +$commission.text().split(": ")[1];

		$commission.remove();

		$("<button>").text("MoveOut")
			.click((e) => {
				$apartmentDiv.remove();				

				showMessage(`They had found cockroaches in ${familyName}\'s apartment`);
			})
			.appendTo($apartmentDiv);

		const currentAgencyProfit = +$agencyProfit.text()
			.split(": ")[1]
			.split(" ")[0];

		$agencyProfit.text(`Agency profit: ${currentAgencyProfit + 2 * commission} lv.`)		

		$apartmentDiv.css("border", "2px solid red");

		showMessage("Enjoy your new home! :))");
	});
}