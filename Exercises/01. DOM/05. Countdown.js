function countdown(startTime) {
    let time = startTime;
    let box = document.getElementById('time');
    setInterval(decrement, 1000);

    function decrement() {
        time--;

        if (time >= 0) {
            box.value = `${Math.floor(time / 60)}:${('0' + time % 60).slice(-2)}`;
        }
    }
}