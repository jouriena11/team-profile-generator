const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email, 'Team Manager');
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return `Office number: ${this.officeNum}`
    }

    getQuestions() {
        const questions = super.getQuestions();
        const managerQuestions = [
            {
                type: "number",
                message: `Please enter the ${super.getRole().toLowerCase()}'s office number.`,
                name: "officeNum",
                validate: (input) => {
                    if (input.toString().length !== 10) {
                        return 'Your entered office number must consist of 10 whole numbers. Please try again.'
                    } else {
                        return true
                    }
                },
                filter: (input) => {
                    return Number.isNaN(input) || input.toString().length !== 10? '': Number(input) 
                }
            }
        ]

        return questions.concat(managerQuestions);
    }
}

module.exports = Manager