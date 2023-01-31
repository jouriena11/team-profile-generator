const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'engineer');
        this.github = github;
    }

    getGithub() {
        return `Github: <a href="https://github.com/${this.github}">${this.github}</a>`; // to check again if the code is correct
    }

    getQuestions() {
        const questions = super.getQuestions();
        const engineerQuestions = [
                {
                type: "number",
                message: `Please enter the ${super.getRole()}'s GitHub username.`,
                name: "github"
                }
            ]

        return questions.concat(engineerQuestions);
    }
}

module.exports = Engineer