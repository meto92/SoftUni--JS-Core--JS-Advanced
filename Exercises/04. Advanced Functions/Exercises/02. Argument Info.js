function printArgumentsInfo() {
    let argsCount = {};
    
    [...arguments].forEach(arg => {
        let type = typeof(arg);

        console.log(`${type}: ${arg}`);

        argsCount[type] = argsCount[type] + 1 || 1;
        
        if (type === "object") {
            [...Object.values(arg)]
                .forEach(value => {
                    let valueType = typeof value;
                
                    argsCount[valueType] = argsCount[valueType] + 1 || 1;
                });
        }
    });

    [...Object.entries(argsCount)]
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => console.log(`${type} = ${count}`));
}