const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

// array of questions for user


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (value) => {
      if (value.length) {
        return true;
      } else {
        return 'Please enter a title for your project.';
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How is the project installed?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should the project be used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license does the project use?',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test the project?',
  }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {inquirer.prompt(questions).then((answers) => {

    console.log(answers);
}).catch((error) => {
    console.error('An error occurred: ', error);
});
}

// function call to initialize program
init();
