function addItem() {
	const deleteButtonHTML = ' <a href="#">[Delete]</a>';

	[...document.querySelectorAll('ul#items li')]
		.filter(li => !li.innerHTML.includes('[Delete]'))
		.forEach(li => {
			li.innerHTML = li.textContent + deleteButtonHTML;
		});
	
	[...document.querySelectorAll('ul#items li')]
		.forEach(el => el.addEventListener('click', deleteItem));

	let input = document.getElementById('newText');
	
	if (!input.value) {
		return;
	}
	
	let list = document.getElementById('items');
	
	let li = document.createElement('li');
	
	li.innerHTML = input.value + deleteButtonHTML;
	
	li.children[0].addEventListener('click', deleteItem);
	
	list.appendChild(li);
	
	input.value = '';
	
	function deleteItem(event) {
		if (!event.target.parentNode.parentNode) {
			return;
		}

		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		//this.parentNode.parentNode.removeChild(this.parentNode);
	}
}