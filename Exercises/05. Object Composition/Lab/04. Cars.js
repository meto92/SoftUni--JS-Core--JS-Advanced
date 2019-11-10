function solve(commands) {
    let garage = {
        cars: {},
        create: function(args) {
            let name = args.shift();

            let car = {};

            if (args.length) {
                car = Object.create(this.cars[args[1]]);
            }

            this.cars[name] = car;
        },
        set: function(args) {
            let [name, key, value] = args;

            this.cars[name][key] = value;
        },
        print: function([name]) {
            let car = JSON.parse(JSON.stringify(this.cars[name]));

            let prototype = Object.getPrototypeOf(this.cars[name]);
            
            while (Object.getPrototypeOf(prototype)) {
                [...Object.entries(prototype)]
                    .forEach(([key, value]) => {
                        car[key] = value;
                    });

                prototype = Object.getPrototypeOf(prototype);
            }

            console.log([...Object.entries(car)]
                .map(([key, value]) => `${key}:${value}`)
                .join(", "));
        }
    };

    commands.map(str => str.split(" "))
        .forEach(commandArgs => {
            let commandName = commandArgs.shift();

            garage[commandName](commandArgs);
        });
}