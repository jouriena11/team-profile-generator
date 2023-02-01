const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const mockManager = new Manager('', '', '', '');
const Engineer = require('./lib/Engineer');
const mockEngineer = new Engineer('', '', '', '');
const Intern = require('./lib/Intern');
const mockIntern = new Intern('', '', '', '');

const askTeamInfo = [
    {
        type: "input",
        message: "what's the team name?",
        name: "teamName"
    },
    ...mockManager.getQuestions(),
    {
        type: "confirm",
        message: "Would you like to add more member to the team?",
        name: "confirmAddMember",
    }
]

const loopQuestion = [
    {
        type: "confirm",
        message: "Would you like to add more member to the team?",
        name: "confirmAddMember",
    }
]

const addTeamMember =  [   
    {
        type: "list",
        message: "Please specify the role of the team member you would like to add",
        name: "addTeamMember",
        choices: ['Engineer', 'Intern']
    }
]

const teamData = []

init();


function init() {
    inquirer
        .prompt(askTeamInfo)
        .then((response) => {
            const data = {
                teamName: response.teamName,
                manager: new Manager(response.name, response.id, response.email, response.officeNum),
                members: []
            }

            if(response.confirmAddMember) {
                addMember(data); // when choosing to add member, the data is passed to addMember() function
            }
            else {
                teamData.push(data); // if there's only a manager in the team, then push the data to the teamData array right away,
                teamProfileRender(teamData); // and start rendering an HTML page.
            }
        })
}

async function addMember(team) {
    let breakLoop = true
    while(breakLoop) {
        const response = await inquirer.prompt(addTeamMember)
        let memberQuestion = []

        if(response.addTeamMember == 'Engineer') {
            const engineerQuestions = mockEngineer.getQuestions();
            memberQuestion = engineerQuestions.concat(loopQuestion);
        } else {
            const internQuestions = mockIntern.getQuestions();
            memberQuestion = internQuestions.concat(loopQuestion);    
        }

        const responseMember = await inquirer.prompt(memberQuestion);
        
        const member = response.addTeamMember == 'Engineer'? new Engineer(responseMember.name, responseMember.id, responseMember.email, responseMember.github): new Intern(responseMember.name, responseMember.id, responseMember.email, responseMember.school)
        
        team.members.push(member);
        breakLoop = responseMember.confirmAddMember; // the while loop would continue until a user does not wish to add any more member to the team
    }

    teamData.push(team);
    console.log(teamData);
    teamProfileRender(teamData);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log(err);
        }
    })
}

function getAltProperty(employee) {
    if(employee.getRole() === 'Team Manager') {
        return employee.getOfficeNum();
    } else if(employee.getRole() === 'Engineer') {
        return employee.getGithub();
    } else {
        return employee.getSchool();
    }
}

function teamProfileRender(teamData) {
    const {teamName, manager, members} = teamData[0];

    const managerProfileHTML = `<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
                                <div class="card" style="width: 20rem;">
                                    <div class="card-body card-body-custom">
                                        <h5 class="card-title employee-name">${manager.getName()}</h5>
                                        <p class="card-text employee-title">${manager.getRole()}</p>
                                    </div>
                                    <div class="card-ul-container">
                                        <ul class="list-group list-group-flush px-4 py-4">
                                            <li class="list-group-item">${manager.getId()}</li>
                                            <li class="list-group-item">${manager.getEmail()}</li>
                                            <li class="list-group-item">${getAltProperty(manager)}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>`

    const memberHTML = () => {
        let teamRenderHTML = ``
        for(let i = 0; i < members.length; i++) {
            
            const memberHTML = `<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
                                        <div class="card" style="width: 20rem;">
                                            <div class="card-body card-body-custom">
                                                <h5 class="card-title employee-name">${members[i].getName()}</h5>
                                                <p class="card-text employee-title">${members[i].getRole()}</p>
                                            </div>
                                            <div class="card-ul-container">
                                                <ul class="list-group list-group-flush px-4 py-4">
                                                    <li class="list-group-item">${members[i].getId()}</li>
                                                    <li class="list-group-item">${members[i].getEmail()}</li>
                                                    <li class="list-group-item">${getAltProperty(members[i])}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`
            
            teamRenderHTML += memberHTML;
        }
        return teamRenderHTML;
    }

    const htmlPage = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                            <link href="../assets/style.css" rel="stylesheet">
                            <title>Team Roster</title>
                        </head>
                        <body>
                            <header>
                                <div class="container-fluid">
                                    <div class="row text-center py-4">
                                        <h1 id="team-name">Team: ${teamName}</h1>
                                    </div>
                                </div>
                            </header>
                            <section>
                                <div class="container-fluid my-lg-5">
                                    <div class="row">
                                        <div class="offset-2 col-8">
                                                <div class="row d-flex justify-content-center">
                                            ${managerProfileHTML}
                                            ${memberHTML()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
                            <script src="../index.js"></script>
                        </body>
                        </html>`
    
    console.log(`Team: ${teamName}`);
    console.log(manager);
    console.log(members);

    writeToFile('./dist/index.html', htmlPage);

}