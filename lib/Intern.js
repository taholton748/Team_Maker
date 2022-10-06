const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return "Intern"
    }
    provideHtml() {
        return `<div class="shadow w-50 m-4">
        <div class="bg-primary text-white p-3">
        <h2>${this.name}</h2>
        <h3><i class="fa-solid fa-user-graduate"></i> ${this.getRole()}</h3>
        </div>
        <div class="p-3 bg-light">
        <p class="list-group-item">ID: ${this.id}</p>
        <p class="list-group-item">E-mail: ${this.email}</p>
        <p class="list-group-item">School: ${this.school}</p>
        </div>
        </div>`
    }
}

module.exports = Intern;