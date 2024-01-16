const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

// array of questions for user


const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'Other'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
];


function writeToFile(answers) {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile('newMarkdown.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('newMarkdown.md file has been generated successfully.');
      }
    });
  }
  
  // function to initialize program
  function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateMarkdown(answers);
            fs.writeFileSync('generatedMarkdown.md', readmeContent);
            console.log('Successfully created generatedMarkdown.md');
        })
        .catch(error => console.error('An error occurred:', error));
}
  
  // function call to initialize program
  init();
  