class Stringer {
    constructor(string, initialLength) {
        this.innerString = string;
        this.innerLength = initialLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length);
    }

    toString() {
        if (this.innerLength === 0) {
            return "...";
        }

        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + "...";
        }
        
        return this.innerString;
    }
}