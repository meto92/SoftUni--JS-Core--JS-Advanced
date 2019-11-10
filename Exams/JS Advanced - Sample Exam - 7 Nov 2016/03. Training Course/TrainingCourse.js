class TrainingCourse {
	constructor(title, trainer) {
		this.title = title;
		this.trainer = trainer;
		
		this._topics = [];
	}
	
	addTopic(title, date) {
        this._topics = this._topics
            .filter(topic => topic.date !== date);
        
        this._topics.push({
			title,
			date
		});
        
        this._topics.sort((a, b) => a.date - b.date);

        return this;
	}
	
	get firstTopic() {
		return this._topics[0];
	}
	
	get lastTopic() {
		return this._topics[this._topics.length - 1];
	}
	
	toString() {
		let result = [`Course "${this.title}" by ${this.trainer}`];
		
		this._topics.forEach(topic => {
			result.push(` * ${topic.title} - ${topic.date}`);
		});

        if (result.length === 1) {
            result.push("");
        }

		return result.join("\n");
	}
}