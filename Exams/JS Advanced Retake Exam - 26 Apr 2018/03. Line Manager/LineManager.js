class LineManager {
    constructor(stops) {
        this._stops = [];
        this.stops = stops;
        this.currentStopIndex = 0;
        this.duration = 0;
        this.delay = 0;
    }

    static validateStop(stop) {
        if (!stop.hasOwnProperty("name")) {
            throw new Error("Invalid stop! Property 'name' is missing")
        }

        if (typeof stop.name !== "string") {
            throw new Error("Name property must be string!");
        }

        if (!stop.name) {
            throw new Error("Name cannot be empty string!");
        }

        if (!stop.hasOwnProperty("timeToNext")) {
            throw new Error("Invalid stop! Property 'timeToNext' is missing");
        }

        if (typeof stop.timeToNext !== "number") {
            throw new Error("Property 'timeToNext' must be number!");
        }

        if (stop.timeToNext < 0) {
            throw new Error("Property 'timeToNext' must be >= 0");
        }
    }

    get stops() {
        return this._stops;
    }

    set stops(value) {
        value.forEach(stop => {
            LineManager.validateStop(stop);

            this._stops.push(stop);
        });
    }

    get atDepot() {
        return this.currentStopIndex === this.stops.length - 1;
    }

    get nextStopName() {
        return this.atDepot
            ?  "At depot."
            : this.stops[this.currentStopIndex + 1].name;
    }

    get currentDelay() {
        return this.delay;
    }

    arriveAtStop(minutes) {
        minutes = +minutes;
        
        if (Number.isNaN(minutes)) {
            throw new Error("Minutes must be number!");
        }

        if (minutes < 0) {
            throw new Error("Minutes must be positive!");
        }

        if (this.atDepot) {
            throw new Error("Bus is at depot!");
        }

        this.duration += minutes;
        this.delay += minutes - this.stops[this.currentStopIndex].timeToNext;
        this.currentStopIndex++;

        return !this.atDepot;
    }

    toString() {
        const result = [
            'Line summary',
            `- ${this.atDepot ? "Course completed" : `Next stop: ${this.nextStopName}`}`,
            `- Stops covered: ${this.currentStopIndex}`,
            `- Time on course: ${this.duration} minutes`,
            `- Delay: ${this.currentDelay} minutes`
        ];

        return result.join("\n");
    }
}