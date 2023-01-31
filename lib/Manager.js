const Employee = require('./Employee');
// const Employee = employeeClass.Employee
// const mainQuestionsArr = employeeClass.mainQuestions

// console.log(Employee)
// console.log(mainQuestionsArr)

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email, 'team manager');
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return `Office number: ${this.officeNum}`
    }

    getQuestions() { // static syntax is used when no parameter value is known; without 'static', deconstructing operator (...) cannot be used
        const questions = super.getQuestions();
        const managerQuestions = [
            {
                type: "number",
                message: `Please enter the ${super.getRole()}'s office number.`,
                name: "officeNum",
                // validate: (input)=>{ // 
                //     var done = this.async; // what does this code mean?
                //     if(typeof input !== 'number') { 
                //         done('An office number must consist of only numbers. Please try again')
                //     } else if (input !== 10) {
                //         done('Your entered office number must consist of 10 whole numbers. Please try again.')
                //     } else {
                //         done(null, true); // why is null necessary here?
                //     }
                // }
            }
        ]

        return questions.concat(managerQuestions);
    }

}

module.exports = Manager