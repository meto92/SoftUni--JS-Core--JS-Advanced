function processCommands(strings) {
    let collection = [];

    let commandProcessor = {
        add: (item) => collection.push(item),
        remove: (item) => collection = collection.filter(element => element !== item),
        print: () => console.log(collection.join(","))
    };

    strings.map(str => str.split(" "))
        .forEach(([command, argument]) => {
            commandProcessor[command](argument);
        });
}