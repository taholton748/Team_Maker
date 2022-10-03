// Function to generate markdown for HTML file
function generateMarkdown(data) {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
  </head>

  <body>
    <header>
    <h1>My Team</h1>
    </header>
    <main>
    <div>
    <h2>${data.manager}</h2>
    <h3>Manager</h3>
    <p>ID: ${data.managerId}</p>
    <p>E-mail: ${data.managerEmail}</p>
    <p>Office number: ${data.office}</p>
    </div>
    </main>
  </body>
  </html>
    `;
}

module.exports = generateMarkdown;