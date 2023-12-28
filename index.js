const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const operations = ["Add an engineer", "Add an intern", "Finish building the team"]

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

  const addTeam = await inquirer.prompt([
    {
      type: `list`,
      message: `What do you want to do next?`,
      name: `teamChoice`,
      choices: operations
    }
  ])

  switch(addTeam.operations) {
    case "Add an engineer":
        break;
    case "Add an intern":
        break;
    case "Finish building the team":
        break;
  }
}

Questions();
