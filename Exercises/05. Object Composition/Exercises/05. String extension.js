(() => {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return this + "";
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return this + "";
    };

    String.prototype.isEmpty = function() {
        return !(this + "");
    };

    String.prototype.truncate = function(n) {
        let length = this.length;
        
        if (length <= n) {
            return this + "";
        }
        
        if (n < 4) {
            return ".".repeat(n);
        }

        if (this.indexOf(" ") === -1) {
            return this.substring(0, n - 3) + "...";
        }

        let spaceIndex = this.indexOf(" ");

        while (this.indexOf(" ", spaceIndex + 1) !== -1 && this.indexOf(" ", spaceIndex + 1) <= n - 3) {
            spaceIndex = this.indexOf(" ", spaceIndex + 1);
        }

        return this.substring(0, spaceIndex) + "...";
    };

    String.format = function() {
        let str = arguments[0];

        [...arguments].slice(1)
            .forEach((arg, index) => {
                str = str.replace(`{${index}}`, arg);
            });

        return str;
    };
})();