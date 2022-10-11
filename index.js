// Packages to require
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// Team role classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Add manager


const addManager = [
  {
    type: "input",
    name: "managerName",
    message: "Enter team manager's name:",
    validate: (managerName) => {
      if (managerName) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter manager's employee ID:",
    validate: (managerId) => {
      if (managerId) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter manager's e-mail address:",
    validate: (managerEmail) => {
      if (managerEmail) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "office",
    message: "Enter manager's office number:",
    validate: (office) => {
      if (office) {
        return true;
      } else {
        return false;
      }
    },
  },
];
// Add employee
const addEmployee = [
      {
          type: 'list',
          message: 'Would you like to add another employee?',
          name: `choice`,
          choices: ["Engineer", "Intern", "I am done"]
      }]

const employeeType = () => {
  inquirer.prompt(addEmployee)
  .then(response => {
    if(response.choice == "Engineer") {
      console.log(response.choice);
      createEngineer()
  }else if (response.choice == "Intern") {
    console.log(response.choice);
      createIntern();
  }
})
}


      // .then(response => {
      // if(response.choice == "Engineer") {
      //     engineerQuestions()
      // }else if (response.choice == "Intern") {
      //     internQuestions()
  //     }else {
  //         createHTML()
  //     }
  // })


  // Add engineer questions
  function createEngineer () {
    inquirer.prompt([
      {
        type: "input",
        name: "nameInput",
        message: "Enter employee name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID:",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's e-mail address:",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer's GitHub username:",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            return false;
          }
        },
      }
    ]).then(engineerResponses => {
      console.log(engineerResponses);
      const engineer = new Engineer(
        engineerResponses.nameInput,
        engineerResponses.id,
        engineerResponses.email,
        engineerResponses.github
      );
      console.log(engineer.provideHtml());
      // Add engineer to HTML
      fs.appendFileSync("./dist/My_Team.html", engineer.provideHtml(), (err) =>
      err ? console.log(err) : ""
      );
    });
  }
  // 
  function createIntern () {
    inquirer.prompt([
      {
        type: "input",
        name: "nameInput",
        message: "Enter employee name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID:",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's e-mail address:",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter school intern attends:",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            return false;
          }
        },
      }
    ])
  }

// Function to write HTML file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  console.log("init start");
  writeToFile(
    "./dist/My_Team.html",
    `<!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/dfccfe40cc.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="style.css">
      <title>My Team</title>
  
    </head>
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 bg-danger jumbotron">
            <h1 class="text-center text-white">My Team</h1>
          </div>
        </div>
      </div>
      <div class="container-fluid d-flex">
      `
  );
  // Create manager
  inquirer.prompt(addManager).then((inquirerResponses) => {
    console.log(inquirerResponses);
    const manager = new Manager(
      inquirerResponses.managerName,
      inquirerResponses.managerId,
      inquirerResponses.managerEmail,
      inquirerResponses.office
    );
    console.log(manager.provideHtml());
    // Add manager to HTML
    fs.appendFileSync("./dist/My_Team.html", manager.provideHtml(), (err) =>
      err ? console.log(err) : ""
    );
    // addEmployee();
    employeeType();
    // Create engineer
    // inquirer.prompt(addEmployee).then((inquirerResponses) => {
      // console.log(inquirerResponses);
      // const engineer = new Engineer(
      //   inquirerResponses.nameInput,
      //   inquirerResponses.id,
      //   inquirerResponses.email,
      //   inquirerResponses.github
      // );
      // console.log(engineer.provideHtml());
      // // Add engineer to HTML
      // fs.appendFileSync("./dist/My_Team.html", engineer.provideHtml(), (err) =>
      // err ? console.log(err) : ""
      // );
    // });
    // // Create intern
    // inquirer.prompt(addEmployee).then((inquirerResponses) => {
    //   console.log(inquirerResponses);
    //   const intern = new Intern(
    //     inquirerResponses.nameInput,
    //     inquirerResponses.id,
    //     inquirerResponses.email,
    //     inquirerResponses.school
    //   );
    //   console.log(intern.provideHtml());
    //   // Add intern to HTML
    //   fs.appendFileSync("./dist/My_Team.html", intern.provideHtml(), (err) =>
    //   err ? console.log(err) : ""
    //   );
    // });
    // Close open HTML tags
    fs.appendFileSync(
      "./dist/My_Team.html",
      `    </div>
    </body>
    </html>`,
      (err) => (err ? console.log(err) : "")
    );
  });
}

// Call to initialize app
init();
