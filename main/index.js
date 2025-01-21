// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
// const questions = [];

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Provide references',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can people contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for this project:',
    choices: ['MIT', 'Apache', 'KoneTechI', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'month',
    message: 'What is the current month?',
  },
  {
    type: 'input',
    name: 'year',
    message: 'What is the current year?',
  },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) throw err;
    console.log('README generated');
  });
}




// TODO: Create a function to initialize app
// function init() {}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    })
    .catch((err) => {
      console.error('Error in generating README:', err);
    });
}


// Function call to initialize app
init();