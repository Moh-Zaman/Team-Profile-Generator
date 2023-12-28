// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        let role = "Manager"
        return role
    }
    getOfficeNumber() {
        return this.officeNumber        
    }
}

module.exports = Manager;

