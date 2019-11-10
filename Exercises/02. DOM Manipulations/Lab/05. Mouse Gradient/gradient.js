function attachGradientEvents() {
	let gradient = document.getElementById('gradient');
		
	gradient.addEventListener('mousemove', gradientMove);
	gradient.addEventListener('mouseout', gradientOut);
	
	function gradientMove(event) {	
		let percents = event.offsetX / (gradient.clientWidth - 1) * 100;
		
		document.getElementById('result')
			.textContent = `${Math.floor(percents)}%`;
	}
	
	function gradientOut() {
		document.getElementById('result').textContent = '';
	}
}