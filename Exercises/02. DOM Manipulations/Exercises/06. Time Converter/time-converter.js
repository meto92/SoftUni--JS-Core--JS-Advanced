function attachEventsListeners() {
	[...document.querySelectorAll('input[id$="Btn"]')]
		.forEach(input => {
			input.addEventListener('click', eval(`${input.id}Func`));
		});

	let daysField = document.getElementById('days');
	let hoursField = document.getElementById('hours');
	let minutesField = document.getElementById('minutes');
	let secondsField = document.getElementById('seconds');
	
	function daysBtnFunc() {
		let days = +daysField.value;
	
		if (!days) {
			return;
		}
		
		let hours = days * 24;
		let minutes = hours * 60;
		let seconds = minutes * 60;
		
		hoursField.value = hours;
		minutesField.value = minutes;
		secondsField.value = seconds;
	}
	
	function hoursBtnFunc() {
		let hours = +hoursField.value;
	
		if (!hours) {
			return;
		}
		
		let days = hours / 24;
		let minutes = hours * 60;
		let seconds = minutes * 60;
		
		daysField.value = days;
		minutesField.value = minutes;
		secondsField.value = seconds;
	}
	
	function minutesBtnFunc() {
		let minutes = +minutesField.value;
	
		if (!minutes) {
			return;
		}
		
		let seconds = minutes * 60;
		let hours = minutes / 60;
		let days = hours / 24;
		
		secondsField.value = seconds;
		hoursField.value = hours;
		daysField.value = days;		
	}
	
	function secondsBtnFunc() {
		let seconds = +secondsField.value;
	
		if (!seconds) {
			return;
		}
		
		let minutes = seconds / 60;
		let hours = minutes / 60;
		let days = hours / 24;
		
		minutesField.value = minutes;
		hoursField.value = hours;
		daysField.value = days;
	}
}