const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'intern');
        this.school = school;
    }

    getRole() {
        return 'intern';
    }

    getSchool() {
        return `School: ${this.school}`;
    }

    getQuestions() {
        const questions = super.getQuestions();
        const internQuestions = [
            {
                type: "input",
                message: `Please enter the ${super.getRole()}'s school.`,
                name: "school"
                }
        ]

        return questions.concat(internQuestions);
    }
}

module.exports = Intern