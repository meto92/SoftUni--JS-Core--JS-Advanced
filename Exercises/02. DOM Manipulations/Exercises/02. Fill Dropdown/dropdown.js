function addItem() {
	let newItemTextField = document.getElementById('newItemText');
	let newItemValueField = document.getElementById('newItemValue');
	
	if (!newItemTextField.value || !newItemValueField.value) {
		return;
	}
	
	let option = document.createElement('option');
	
	option.textContent = newItemTextField.value;
	option.value = newItemValueField.value;
	
	let menu = document.getElementById('menu');
	
	menu.appendChild(option);
	
	newItemTextField.value = '';
	newItemValueField.value = '';
}