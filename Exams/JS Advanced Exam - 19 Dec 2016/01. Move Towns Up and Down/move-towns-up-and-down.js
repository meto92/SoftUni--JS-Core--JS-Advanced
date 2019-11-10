function move(direction) {
	let $selectedTown = $("#towns option:selected");

	if (direction < 0) {
		$selectedTown.insertBefore($selectedTown.prev());
	} else if (direction > 0) {
		$selectedTown.insertAfter($selectedTown.next());
	}
}