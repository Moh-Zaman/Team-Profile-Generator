// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        console.log(`This workers role is an Manager with an office number of ${this.officeNumber}`)
    }
}

module.exports = Manager;

