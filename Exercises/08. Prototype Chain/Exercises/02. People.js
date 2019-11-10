function solve() {
    class Person {
        constructor(name, age) {
            if (new.target === Person) {
                throw new Error("Cannot be instantiated!");
            }

            this.name = name;
            this.age = age;
        }
    }

    class Employee extends Person {
        constructor(name, age) {
            super(name, age);

            this.salary = 0;
            this.tasks = [];

            this._taskIndex = 0;
        }

        work() {
            console.log(this.name + this.tasks[this._taskIndex++ % this.tasks.length]);
         }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + (this.dividend || 0)} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push(" is working on a simple task.");
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push(" is working on a complicated task.");
            this.tasks.push(" is taking time off work.");
            this.tasks.push(" is supervising junior workers.");
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);

            this.dividend = 0;

            this.tasks.push(" scheduled a meeting.");
            this.tasks.push(" is preparing a quarterly report.");
        }
    }

    return {
        Junior,
        Senior,
        Manager
    };
}