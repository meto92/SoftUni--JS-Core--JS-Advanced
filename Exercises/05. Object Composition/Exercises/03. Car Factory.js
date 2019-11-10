function createCar(orderObj) {
    function createEngine(power, volume) {
        return {
            power,
            volume
        };
    }
    
    const engines = {
        small: createEngine(90, 1800),
        normal: createEngine(120, 2400),
        monster: createEngine(200, 3500)
    };

    function getEngine(minPower) {
        return Object.entries(engines).filter(e => e[1].power >= minPower)[0][1];
    }

    function getCarriage(type, color) {
        if (!["hatchback", "coupe"].includes(type)) {
            return {};
        }

        return {
            type,
            color
        };
    }

    function getWheels(size) {
        size = Math.floor(size);

        size = size % 2 === 0
            ? size - 1
            : size;
            
        return [size, size, size, size];
    }

    return {
        model: orderObj.model,
        engine: getEngine(orderObj.power),
        carriage: getCarriage(orderObj.carriage, orderObj.color),
        wheels: getWheels(orderObj.wheelsize)
    };
}