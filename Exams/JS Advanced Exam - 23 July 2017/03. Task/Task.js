class Task {
    constructor(title, deadline) {
        if (deadline === Date.now()) {
            throw new Error("Cannot set current date for deadline!");
        }

        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error("Deadline is in the past!");
        }

        this._deadline = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get isOverdue() {
        return this.status !== "Complete" && this.deadline < Date.now();
    }

    toString() {
        let result = `[${Task.getStatusIcon(this.status, this.isOverdue)}] ${this.title}`;

        if (this.status === "Complete") {
            return result;
        }

        if (this.isOverdue) {
            result += " (overdue)";
        } else {
            result += ` (deadline: ${this.deadline}))`;
        }

        return result;
    }

    static comparator(a, b) {
        const values = {
            "In Progress": 0,
            Open: 1,
            Complete: 2
        };

        if (b.isOverdue && a.isOverdue) {
            return a.deadline - b.deadline;
        }

        if (b.isOverdue || a.isOverdue) {
          return b.isOverdue || a.isOverdue;
      }

        return values[a.status] - values[b.status] 
            || a.deadline - b.deadline;
    }

    static getStatusIcon(status, isOverdue) {
        const statuses = {
            Open: "\u2731", // ✱
            "In Progress": "\u219D", // ↝
            Complete: "\u2714", // ✔
            Overdue: "\u26A0" // ⚠
        };

        if (isOverdue) {
            return statuses.Overdue;
        }

        return statuses[status];
    }
}