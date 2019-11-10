class SortedList {
    constructor() {
        this.size = 0;
        this._elements = [];
    }

    add(element) {
        let index = -1;

        while (this._elements[index + 1] !== undefined && this._elements[index + 1] < element) {
            index++;
        }

        this._elements.splice(index + 1, 0, element);

        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return;
        }

        this._elements.splice(index, 1);

        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return;
        }

        return this._elements[index];
    }
}