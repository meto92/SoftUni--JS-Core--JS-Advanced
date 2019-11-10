function listBuilder(selector) {
	let $container = $(selector);
	
	function createNewList() {
		$container.empty();

		$("<ul>").appendTo($container);
	}

	function addItem(text) {
		if (!text) {
			return;
		}

		$("<li>")
			.text(text)
			.append($("<button>")
				.text("Up")
				.click((e) => {
					let $li = $(e.target).parent();

					$li.insertBefore($li.prev());
				}))
			.append($("<button>")
				.text("Down")
				.click((e) => {
					let $li = $(e.target).parent();

					$li.insertAfter($li.next());
				}))
			.appendTo($(`${selector} ul`));
	}

	return {
		createNewList,
		addItem
	};
}