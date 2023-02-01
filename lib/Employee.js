const fsExtra = require('fs-extra');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
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
                message: `Please enter the ${this.getRole().toLowerCase()}'s name.`,
                name: "name"
            },
            {
                type: "input",
                message: `Please enter the ${this.getRole().toLowerCase()}'s employee ID`,
                name: "id",
            },
            {
                type: "input",
                message: `Please enter the ${this.getRole().toLowerCase()}'s email address.`,
                name: "email"
            }
        ]

        return mainQuestions;
    }
}

module.exports = Employee