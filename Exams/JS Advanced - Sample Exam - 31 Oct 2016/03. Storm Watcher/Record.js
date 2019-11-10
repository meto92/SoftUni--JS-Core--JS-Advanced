class Record {
    static get id() {
        return Record._id;
    }
    
    static set id(value) {
        Record._id = value || 0;
    }

    constructor(temperature, humidity, pressure, windSpeed) {
        Record.id++;
        
        this.id = Record.id;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    toString() {
        const isStormy = this.temperature < 20
            && (this.pressure < 700 || this.pressure > 900)
            && this.windSpeed > 25;

        const status = isStormy ? "Stormy" : "Not stormy";

        let result = [`Reading ID: ${this.id}`];

        result.push(`Temperature: ${this.temperature}*C`);
        result.push(`Relative Humidity: ${this.humidity}%`);
        result.push(`Pressure: ${this.pressure}hpa`);
        result.push(`Wind Speed: ${this.windSpeed}m/s`);
        result.push(`Weather: ${status}`);

        return result.join("\n")
    }
}