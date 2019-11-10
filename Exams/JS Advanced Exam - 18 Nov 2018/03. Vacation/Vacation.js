class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids[grade]) {
            this.kids[grade] = [];
        }

        const gradeArr = this.kids[grade];
        const kid = `${name}-${budget}`;

        if (gradeArr.includes(kid)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        gradeArr.push(kid);

        return gradeArr;
    }

    removeChild(name, grade) {
        const gradeArr = this.kids[grade];

        if (!gradeArr || !gradeArr.some(kid => kid.includes(`${name}-`))) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        const kidIndex = gradeArr.filter(kid => kid.includes(`${name}-`))[0];

        gradeArr.splice(kidIndex, 1);

        return gradeArr;
    }

    toString() {
        if (JSON.stringify(this.kids) === "{}") {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        
        const result = [
            `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`
        ];

        Object.entries(this.kids)
            .sort((a, b) => a[0] - b[0])
            .forEach(([grade, kids]) => {
                result.push(`Grade: ${grade}`);

                kids.forEach((kid, index) => {
                    result.push(`${index + 1}. ${kid}`);
                });
            })

        result.push("");

        return result.join("\n");
    }

    get numberOfChildren() {
        return Object.values(this.kids)
            .map(grade => grade.length)
            .reduce((a, b) => a + b, 0);
    }
}