function timer() {
    let startBtn = $("#start-timer");
    let stopBtn = $("#stop-timer");

    stopBtn.attr("disabled", "");

    let secondsField = $("#seconds");
    let minutesField = $("#minutes");
    let hoursField = $("#hours");
    
    let time = 0;

    function reset() {
        time = 0;

        secondsField.text("00");
        minutesField.text("00");
        hoursField.text("00");
    }

    function showTime() {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 3600);

        let secondsStr = ("0" + seconds).slice(-2);
        let minutesStr = "0".repeat(minutes < 10 ? 1 : 0) + minutes;
        let hoursStr = "0".repeat(hours < 10 ? 1 : 0) + hours;

        secondsField.text(secondsStr);
        minutesField.text(minutesStr);
        hoursField.text(hoursStr);
    }

    let intervalId;

    startBtn.click((e) => {
        //e.preventDefault();
        //e.stopPropagation();

        startBtn.attr("disabled", "");
        stopBtn.removeAttr("disabled");

        //reset()

        if (!intervalId) {
            intervalId = setInterval(() => {
                time++;
    
                showTime();
            }, 1000);
        }
    });

    stopBtn.click((e) => {
        //e.preventDefault();
        //e.stopPropagation();

        stopBtn.attr("disabled", "");
        startBtn.removeAttr("disabled");

        clearInterval(intervalId);
        intervalId = null;
    });
}