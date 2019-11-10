function getElemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Cannot be instantiated!");
            }

            this.weight = +weight;
            this.melonSort = melonSort;
            this.element = this.constructor.name.slice(0, -5);
        }

        get elementIndex() {
            let index = this.weight * this.melonSort.length;

            return index;
        }

        toString() {
            let result = `Element: ${this.element}`;

            result += `\nSort: ${this.melonSort}`;
            result += `\nElement Index: ${this.elementIndex}`;

            return result;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    const elements = [
        "Water",
        "Fire",
        "Earth",
        "Air"
    ];

    class Melolemonmelon extends Firemelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

            this._elementIndex = 0;

            this.morph();
        }

        morph() {
            this.element = elements[this._elementIndex++ % elements.length];    
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };
}