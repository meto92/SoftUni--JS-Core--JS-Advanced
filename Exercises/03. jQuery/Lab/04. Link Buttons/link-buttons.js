function attachEvents() {
    function select(e) {
        // e.preventDefault();
        // e.stopPropagation();

        $(".button").removeClass("selected");
        e.target.classList.add("selected");
    }

    $(".button").click(select);
}