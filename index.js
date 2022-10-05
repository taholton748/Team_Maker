// Packages to require
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateHTML = require("./src/generateHTML.js");

// Team array
const teamArray = [];

// Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Add manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter team manager's name:",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter manager's employee ID:",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter manager's e-mail address:",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Enter manager's office number:",
            validate: office => {
                if (office) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const managerInput = { managerName, managerId, managerEmail, office };
        const manager = new Manager (managerName, managerId, managerEmail, office);

        teamArray.push(manager);
        console.log(teamArray);
    })
};
    
// Confirm or deny new employee
const addEmployee = () => {
    return inquirer.prompt ([
    {
        type: 'confirm',
        name: 'confirmNewMember',
        message: "Would you like to add another team member?",
        default: false
    },
    {
        type: 'list',
        name: 'role',
        message: "Choose employee role:",
        choices: ['Engineer', 'Intern']
    },

// Add employee info
    {
        type: 'input',
        name: 'nameInput',
        message: "Enter employee name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter employee ID:",
        validate: id => {
            if (id) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's e-mail address:",
        validate: email => {
            if (email) {
                return true;
            } else {
                return false;
            }
        }
    },

// Engineer only
    {
        type: 'input',
        name: 'github',
        message: "Enter engineer's GitHub username:",
        when: (input) => input.role === "Engineer",
        validate: github => {
            if (github) {
                return true;
            } else {
                return false;
            }
        }
    },

// Intern only
    {
        type: 'input',
        name: 'school',
        message: "Enter school intern attends:",
        when: (input) => input.role === "Intern",
        validate: school => {
            if (school) {
                return true;
            } else {
                return false;
            }
        }
    }
    ])
};

// Function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(addManager)
    .then((inquirerResponses) => {
        console.log(inquirerResponses);
        writeToFile("./dist/My_Team.html", generateHTML(inquirerResponses));
        inquirer.prompt(addEmployee)
        .then((inquirerResponses) => {
            console.log(inquirerResponses);
            writeToFile("./dist/My_Team.html", generateHTML(inquirerResponses));
        });
    });
    
}

// Call to initialize app
init();