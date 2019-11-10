class MailBox {
    constructor() {
        this.messages = [];
    }

    addMessage(subject, text) {
        this.messages.push({
            subject,
            text
        });

        return this;
    }

    get messageCount() {
        return this.messages.length;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(substr) {
        return this.messages
            .filter(m => m.subject.includes(substr));
    }

    toString() {
        if (!this.messageCount) {
            return " * (empty mailbox)";
        }

        return this.messages
            .map(m => ` * [${m.subject}] ${m.text}`)
            .join("\n");
    }
}