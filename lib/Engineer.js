const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
    }

    getGithub() {
        return `Github: <a href="https://github.com/${this.github}">${this.github}</a>`;
    }

    getQuestions() {
        const questions = super.getQuestions();
        const engineerQuestions = [
                {
                type: "input",
                message: `Please enter the ${super.getRole().toLowerCase()}'s GitHub username.`,
                name: "github"
                }
            ]

        return questions.concat(engineerQuestions);
    }
}

module.exports = Engineer