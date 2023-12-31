const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const operations = ["Add an engineer", "Add an intern", "Finish building the team"];

async function Questions() {
  const dataM = await inquirer.prompt([
        {
        type: `input`,
        message: `Please enter the manager's name:`,
        name: `name`,
        },
        {
        type: `input`,
        message: `Please enter the manager's Id:`,
        name: `id`,
        },
        {
        type: `input`,
        message: `Please enter the manager's email:`,
        name: `email`,
        },
        {
        type: `input`,
        message: `Please enter the manager's office number`,
        name: `officeN`,
        },
    ]);

  const manager = new Manager(dataM.name, dataM.id, dataM.email, dataM.officeN);

  teamMembers.push(manager)

  team();

    
    async function addEng() {
        const eng = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please enter the engineer\'s name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Please enter the engineer\'s Id:',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter the engineer\'s email:',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter the engineer\'s GitHub username:',
                name: 'github',                
            },
        ]);
        const engineer = new Engineer(eng.name, eng.id, eng.email, eng.github);

        teamMembers.push(engineer)

        await team();
    }

    async function addInt() {
        const int = await inquirer.prompt([
            {
                type: 'input',
                message: 'Please enter the intern\'s name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Please enter the intern\'s Id:',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter the intern\'s email:',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter the intern\'s school:',
                name: 'school',                
            },
        ]);
        const intern = new Intern(int.name, int.id, int.email, int.school);

        teamMembers.push(intern)

        await team();
    }

    async function team() {
        const addTeam = await inquirer.prompt([
            {
                type: 'list',
                message: 'What do you want to do next?',
                name: 'teamChoice',
                choices: operations
            }
        ]);

        function generateHTML() {
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR, { recursive: true });
              }
            
              const htmlContent = render(teamMembers);
              fs.writeFileSync(outputPath, htmlContent);
              console.log(`HTML file generated at: ${outputPath}`);
        };

        if (addTeam.teamChoice === 'Add an engineer') {
            addEng();
        } else if (addTeam.teamChoice === 'Add an intern') {
            addInt();
        } else if (addTeam.teamChoice === 'Finish building the team') {
            generateHTML();
        }
    }    
}

Questions();
