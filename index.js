const fs = require("fs");
const inquirer = require("inquirer");
const path = require('Path');
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
];

// function to write README file
// we are up to the point where we are passing in the name of the file we want to create 
  //and the data we want to use look into how to write data to a file
  // work out how we can pass our object to the 'generateMarkdow' 
function writeToFile(title, description, installation, usage, contributing, test); {
  fs.writeToFile("response.txt", generateMarkdown(response)), err => {
    err ? console.error (err) : console.log("success!");
  } 

// look into the 'path' module to see how we can get the current working directory and tell the
  // program where to create our new file
  mkdirRecurse = function (inputPath) {
    if (fs.existsSync(inputPath)) {
      return;
    }
    const basePath = path.dirname(inputPath);
    if (fs.existsSync(basePath)) {
      fs.mkdirSync(inputPath);
    }
    mkdirRecurse(basePath);
  }
};

  //function and get back a string to write to the created file

  


// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("generatedReadme.md", answers);
  });
};

// function call to initialize program
init();
