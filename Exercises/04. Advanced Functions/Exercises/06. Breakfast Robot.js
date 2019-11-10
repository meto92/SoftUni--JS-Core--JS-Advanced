function getRobot() {
    let neededIngredients = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    
    let robot = {
        microelements: {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        },
        neededIngredients
    };

    function getNeededIngredients(recipe, quantity) {
        let neededIngredientsForRecipe = JSON.parse(JSON.stringify(robot.neededIngredients[recipe]));

        [...Object.keys(neededIngredientsForRecipe)]
            .forEach(ingredient => {
                neededIngredientsForRecipe[ingredient] *= quantity;
            });

        return neededIngredientsForRecipe;
    }

    function tryToPrepare(neededIngredientsForRecipe) {
        let errorMessage = "";

        [...Object.entries(neededIngredientsForRecipe)]
            .forEach(([microelement, quantity]) => {
                if (!errorMessage && robot.microelements[microelement] < quantity) {                    
                    errorMessage = `Error: not enough ${microelement} in stock`;
                }
            });

        if (errorMessage) {
            return errorMessage;
        }

        [...Object.entries(neededIngredientsForRecipe)]
            .forEach(([microelement, quantity]) => {
                robot.microelements[microelement] -= quantity;
        });
        
        return "Success";
    }

    function processCommand(command) {
        const args = command.split(" ");

        const commandName = args.shift();
        
        let result = "Success";

        switch (commandName) {
            case "restock": {
                let microelement = args[0];
                let quantity = +args[1];

                robot.microelements[microelement] += quantity;
                
                break;
            }
            case "prepare":
                let recipe = args[0];
                let quantity = +args[1];

                let neededIngredientsForRecipe = getNeededIngredients(recipe, quantity);
                
                result = tryToPrepare(neededIngredientsForRecipe);

                break;
            case "report":
                result = [...Object.entries(robot.microelements)]
                    .map(([microelement, quantity]) => `${microelement}=${quantity}`)
                    .join(" ");

                break;
        }
        
        return result;
    }

    return processCommand;
}