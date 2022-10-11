const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
    provideHtml() {
        return `<div class="shadow w-50 m-4">
        <div class="bg-primary text-white p-3">
        <h2>${this.name}</h2>
        <h3><i class="fa-solid fa-glasses"></i> ${this.getRole()}</h3>
        </div>
        <div class="p-3 bg-light">
        <p class="list-group-item">ID: ${this.id}</p>
        <p class="list-group-item">E-mail: ${this.email}</p>
        <p class="list-group-item">GitHub Username: ${this.github}</p>
        </div>
        </div>`
    }
}

module.exports = Engineer;