const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of this application",
  },
  {
    type: "input",
    name: "description",
    message: "what will this application do ",
  },
  {
    type: "input",
    name: "installation",
    message: "what are the instructions for this installation",
  },
  {
    type: "input",
    name: "usage",
    message: "how can a user benefit from this application",
  },
  {
    type: "input",
    name: "contributing",
    message: "how did you make this application function",
  },
  {
    type: "input",
    name: "test",
    message: "how do you use this appliction",
  },
  {
    type: "input",
    name: "email",
    message: "please supply your email address",
  },
  {
    type: "input",
    name: "github",
    message: "please supply github user address",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to add?",
    choices: ['MIT', 'Apache']
  }
];


function writeToFile(newFileTitle, newFileContent) {

  var newFileDirectory = path.join(process.cwd(), newFileTitle); 

  fs.writeFileSync(newFileDirectory, generateMarkdown(newFileContent))
  
  };


  function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("Readme.md", answers);
  });
};

init();
