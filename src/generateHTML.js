// Function to generate markdown for HTML file
const generateTeam = team => {
    const generateManager = manager => 
    {
  return `
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <main>
    <div>
    <h2>${team.manager}</h2>
    <h3>Manager</h3>
    <p>ID: ${team.managerId}</p>
    <p>E-mail: ${team.managerEmail}</p>
    <p>Office number: ${team.office}</p>
    </div>
    </main>
  </body>
  </html>
    `;
}}
module.export = team => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>

  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div>${generateTeam(team)}</div>
      </div>
    </div>
  </body>
  </html>
  `
}