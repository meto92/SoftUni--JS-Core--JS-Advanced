function processCommands(arr) {
    let commandProcessor = {
        current: "",
        append: function(string) {
            this.current += string;
        },
        removeStart: function(count) {
            this.current = this.current.slice(+count);

            return this;
        },
        removeEnd: function(count) {
            this.current = this.current.slice(0, this.current.length - +count);
            
            return this;
        },
        print: function() {
            console.log(this.current);
        },
        process: function(arr) {
            arr.forEach(element => {
                let [commandName, argument] = element.split(" ");

                this[commandName](argument);
            });
        }
    };

    commandProcessor.process(arr);
}