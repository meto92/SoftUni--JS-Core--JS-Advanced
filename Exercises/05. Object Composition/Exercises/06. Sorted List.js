function createSortedList() {
    let elements = [];
    
    function isIndexValid(index) {
        return index >= 0 && index < elements.length;
    }

    let sortedList = {
        add: function(element) {
            let index = -1;

            while (elements[index + 1] !== undefined && elements[index + 1] < element) {
                index++;
            }

            elements.splice(index + 1, 0, element);

            this.size++;
        },
        remove: function(index) {
            if (!isIndexValid(index)) {
                return;
            }

            elements.splice(index, 1);

            this.size--;
        },
        get: function(index) {
            if (!isIndexValid(index)) {
                return;
            }

            return elements[index];
        },
        size: 0
    };

    return sortedList;
}