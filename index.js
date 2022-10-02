// Packages to require
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./src/generateMarkdown");

// Team array
const teamArray = [];

// Add manager
const addManager = [
    {
        type: 'input',
        name: 'manager',
        message: "Enter team manager's name:"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Enter manager's employee ID:"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter manager's e-mail address:"
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter manager's office number:"
    }
];
const addEmployee = [
    {
        type: 'list',
        name: 'role',
        message: "Choose employee role:",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter employee name:"
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "Enter employee ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's e-mail address:"
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter engineer's GitHub username:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter school intern attends:"
    },
    {
        type: 'confirm',
        name: 'confirmNewMember',
        message: "Would you like to add another team member?",
        default: false
    }
];

// Function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(addManager).then((inquirerResponses) => {
        console.log(inquirerResponses);
        writeToFile("My_Team.html", generateMarkdown(inquirerResponses));
    });
}

// Call to initialize app
init();