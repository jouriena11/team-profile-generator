class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `Email: ${this.email}`;
    }

    getRole() {
        return this.role;
    }

    getQuestions() {
        const mainQuestions = [
            {
                type: "input",
                message: `Please enter the ${this.getRole()}'s name.`, // can't apply ${} to the message
                name: "name"
            },
            {
                type: "number",
                message: `Please enter the ${this.getRole()}'s employee ID`,
                name: "id",
                // validate: (response) => { // Is this correct?
                //     var done = this.async; // is this line necessary?
                //     if(employeeId.includes(response)) { // employeeID = an array in index.js
                //         done('Error: This ID already exists. Please assign a different employee ID.')
                //     } else {
                //         employeeID.push(item);
                //     }
                //     }
            },
            {
                type: "input",
                message: `Please enter the ${this.getRole()}'s email address.`,
                name: "email"
            }
        ]

        return mainQuestions;
    }
}

module.exports = Employee