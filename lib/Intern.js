// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(name, id, email)
        this.school = school
    }

    getRole() {
        console.log(`This workers role is an Intern`)
    }
    getSchool() {
        console.log(`The school this intern attends is ${this.school}`)
    }
}

module.exports = Intern;