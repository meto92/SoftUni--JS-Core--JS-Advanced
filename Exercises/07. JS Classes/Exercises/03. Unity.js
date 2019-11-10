class Rat {
    constructor(name) {
        this.name = name;

        this.unitedRats = [];
    }

    unite(otherRat) {
        if (!(otherRat instanceof Rat)) {
            return;
        }

        this.unitedRats.push(otherRat);
        //otherRat.unitedRats.push(this);
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = [this.name];

        this.unitedRats.forEach(rat => result.push(`##${rat.name}`));

        return result.join("\n")
    }
}