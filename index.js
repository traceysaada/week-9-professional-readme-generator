const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of this application",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

// function call to initialize program
init();
