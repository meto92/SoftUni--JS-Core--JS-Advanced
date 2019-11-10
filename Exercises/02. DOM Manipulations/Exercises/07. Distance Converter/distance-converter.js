function attachEventsListeners() {
	document.getElementById('convert')
		.addEventListener('click', convert);
		
	let inputDistanceField = document.getElementById('inputDistance');
	let outputDistanceField = document.getElementById('outputDistance');
	
	let unitsInMeters = {
		km: 1000,
		m: 1,
		cm: 0.01,
		mm: 0.001,
		mi: 1609.34,
		yrd: 0.9144,
		ft: 0.3048,
		in: 0.0254
	};
		
	function getMeters(unit, value = 1) {
		return unitsInMeters[unit] * value;
	}
		
	function convert() {
		let inputDistance = +inputDistanceField.value;
		let inputUnits = document.getElementById('inputUnits').value;
		let outputUnits = document.getElementById('outputUnits').value;
		
		if (!inputDistance) {
			return;
		}
		
		let inputDistanceInMeters = getMeters(inputUnits, inputDistance);
		let outputDistance = inputDistanceInMeters / getMeters(outputUnits);
		
		outputDistanceField.value = outputDistance;
	}
}