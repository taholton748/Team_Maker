const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
    provideHtml() {
        return `<div class="shadow w-50 m-4">
        <div class="bg-primary text-white p-3">
        <h2>${this.name}</h2>
        <h2><i class="fa-solid fa-mug-hot"></i> ${this.getRole()}</h2>
        </div>
        <div class="p-3 bg-light">
        <p class="list-group-item">ID: ${this.id}</p>
        <p class="list-group-item">E-mail: <a href="mailto:${this.email}">${this.email}</a></p>
        <p class="list-group-item">Office number: ${this.officeNumber}</p>
        </div>
        </div>`
    }
}

module.exports = Manager;