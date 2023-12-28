// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(name, id, email)
        this.github = github
    }

    getRole() {
        console.log(`This workers role is an Engineer`)
    }
    getGithub() {
        console.log(`The github for this engineer is ${this.github}`)
    }
}

module.exports = Engineer;