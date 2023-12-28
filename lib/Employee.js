// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        console.log(`Name of Employee: ${this.name}`)
    }
    getId() {
        console.log(`Id of Employee: ${this.id}`)
    }
    getEmail() {
        console.log(`Email of Employee: ${this.email}`)
    }
    getRole() {
        console.log(`This workers role is an Employee`)
    }
}

module.exports = Employee;